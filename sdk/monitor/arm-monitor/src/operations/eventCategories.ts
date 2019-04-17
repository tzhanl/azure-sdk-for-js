/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/eventCategoriesMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a EventCategories. */
export class EventCategories {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a EventCategories.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the list of available event categories supported in the Activity Logs Service.<br>The
   * current list includes the following: Administrative, Security, ServiceHealth, Alert,
   * Recommendation, Policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.EventCategoriesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.EventCategoriesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.EventCategoryCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EventCategoryCollection>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EventCategoryCollection>, callback?: msRest.ServiceCallback<Models.EventCategoryCollection>): Promise<Models.EventCategoriesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.EventCategoriesListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/microsoft.insights/eventcategories",
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EventCategoryCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};