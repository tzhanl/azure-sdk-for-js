/*
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the MIT Licence.

  This sample demonstrates how to use the EventProcessor to process events from all partitions
  of a consumer group in an Event Hubs instance. It also demonstrates the process of checkpointing an event
  which helps new instances of Event Processors that may have spun up for scaling or for crash recovery.

  If your Event Hub instance doesn't have any events, then please run https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/eventhub/event-hubs/samples/sendEvents.ts sample
  to populate it before running this sample.
*/

import {
  EventHubClient,
  ReceivedEventData,
  delay,
  EventProcessor,
  PartitionContext,
  PartitionProcessor,
  CloseReason
} from "@azure/event-hubs";

import { ContainerClient } from "@azure/storage-blob";
import { BlobPartitionManager } from "@azure/eventhubs-checkpointstore-blob";

// A Sample Partition Processor that keeps track of the number of events processed.
class SamplePartitionProcessor extends PartitionProcessor {
  private _messageCount = 0;

  async processEvents(events: ReceivedEventData[], partitionContext: PartitionContext) {
    // events can be empty if no events were recevied in the last 60 seconds.
    // This interval can be configured when creating the EventProcessor
    if (events.length === 0) {
      return;
    }

    for (const event of events) {
      console.log(
        `Received event: '${event.body}' from partition: '${partitionContext.partitionId}' and consumer group: '${partitionContext.consumerGroupName}'`
      );
      this._messageCount++;
    }

    // checkpoint using the last event in the batch
    const lastEvent = events[events.length - 1];
    await partitionContext.updateCheckpoint(lastEvent).catch((err) => {
      console.log(`Error when checkpointing on partition ${partitionContext.partitionId}: `, err);
    });
    console.log(
      `Successfully checkpointed event with sequence number: ${lastEvent.sequenceNumber} from partition: 'partitionContext.partitionId'`
    );
  }

  async processError(error: Error, partitionContext: PartitionContext) {
    console.log(`Encountered an error: ${error.message} when processing partition ${partitionContext.partitionId}`);
  }

  async initialize(partitionContext: PartitionContext) {
    console.log(`Started processing partition: ${partitionContext.partitionId}`);
  }

  async close(reason: CloseReason, partitionContext: PartitionContext) {
    console.log(`Stopped processing for reason ${reason}`);
    console.log(`Processed ${this._messageCount} from partition ${partitionContext.partitionId}.`);
  }
}

const connectionString = "";
const eventHubName = "";
const storageConnectionString = "";
const containerName = "";

async function main() {
  const client = new EventHubClient(connectionString, eventHubName);
  const containerClient = new ContainerClient(storageConnectionString, containerName);
  await containerClient.create();

  const processor = new EventProcessor(
    EventHubClient.defaultConsumerGroupName,
    client,
    SamplePartitionProcessor,
    new BlobPartitionManager(containerClient),
    {
      maxBatchSize: 10,
      maxWaitTimeInSeconds: 20
    }
  );
  await processor.start();
  // after 30 seconds, stop processing
  await delay(30000);

  await processor.stop();
  await client.close();
}

main().catch((err) => {
  console.log("Error occurred: ", err);
});
