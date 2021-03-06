let nock = require('nock');

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/create')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '66284a58-9063-4342-b4a7-5179e6a851fa',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:41:59 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '60a055c6-a76c-4b64-b18d-166a1f599b00',
  'x-ms-ests-server',
  '2.1.9338.12 - EUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Ar9CTSXAJlZPsYlizB9072s_aSJHAQAAABewCNUOAAAA; expires=Wed, 09-Oct-2019 20:41:59 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; HttpOnly',
  'Date',
  'Mon, 09 Sep 2019 20:41:59 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/create', {"policy":{"x509_props":{"subject":"cn=MyCert"},"issuer":{"name":"Unknown","cert_transparency":false}},"attributes":{}})
  .query(true)
  .reply(202, {"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/pending","issuer":{"name":"Unknown"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwnVxIy8FpBGKfDg5dZkcHz1ohr6Nmero5SipHrDSdxyTNy2PrKynYq+YItWG8AnBlrYT7IqKAZXnMLYoii11THh1kLroEyVdtw+BgCdXOojwgs6E3uPU1AEN2nPzFWJcBK6aTuii3dLV6pSMt62Kf7XeyWDWid2Qjkd5N5WvSXSm3NTpzz9PQjdBLP1HRNxsKQ01Arj8gGDG6+LvDvMjJRD63Tjh2QUvfaiFmgGMCauayRwMYavh2xnYbYVMePP60ZEwAKdxrsoV83jKLPUKgrbhPM8wYQ9UAlWBuQSw6rrpmy9DxlVqTEoP2ybS2Cd630VRFJo9HUdn7bHlWbtdtQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBAFxUFae2WrBwRHSrpR3f7FFfqe/xA8MsaDeY5KqkpHWOebm3TFFoqkePcD3IiIKA9ZCkfeUjFPQYYfXPEXJVsTPM6EFnBSRghim0FGs2Snz00R7RbgnrNO+Svlbbe0AjoZLzMzDL7kkMvEpbRW08SiSvYgo3Xj9iEGHRtc+v47zaMRFNYCOP2gefXLYZYyISF6UI9o1Zj7347qMWudpICSpkkRrcivH0eo3EwNJl11vLinC1hQVIJR0DfxM9MdDyDfwpMp+FsUxf6kJxdOYu1n1lIzM83e23IM4CdYbvQLD52HvdIHVd3+6jaL41G9kG0iL06MwTE9k2wABTgbeTx/A=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Please Perform Merge to complete the request.","request_id":"9bc76b92db94482a9b45ae97ee805835"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/pending?api-version=7.0&request_id=9bc76b92db94482a9b45ae97ee805835',
  'Retry-After',
  '10',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'bdb95659-c361-44f2-b72a-4cc2b72abbec',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:41:59 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1270' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/pending')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '7d8e8a48-06a9-4e43-9c17-73d1b96ad331',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:42:00 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '7e2bdb5f-2171-47b6-ac36-05b2e81a9500',
  'x-ms-ests-server',
  '2.1.9338.12 - SCUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Ar9CTSXAJlZPsYlizB9072s_aSJHAgAAABewCNUOAAAA; expires=Wed, 09-Oct-2019 20:42:01 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; HttpOnly',
  'Date',
  'Mon, 09 Sep 2019 20:42:00 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/pending","issuer":{"name":"Unknown"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwnVxIy8FpBGKfDg5dZkcHz1ohr6Nmero5SipHrDSdxyTNy2PrKynYq+YItWG8AnBlrYT7IqKAZXnMLYoii11THh1kLroEyVdtw+BgCdXOojwgs6E3uPU1AEN2nPzFWJcBK6aTuii3dLV6pSMt62Kf7XeyWDWid2Qjkd5N5WvSXSm3NTpzz9PQjdBLP1HRNxsKQ01Arj8gGDG6+LvDvMjJRD63Tjh2QUvfaiFmgGMCauayRwMYavh2xnYbYVMePP60ZEwAKdxrsoV83jKLPUKgrbhPM8wYQ9UAlWBuQSw6rrpmy9DxlVqTEoP2ybS2Cd630VRFJo9HUdn7bHlWbtdtQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBAFxUFae2WrBwRHSrpR3f7FFfqe/xA8MsaDeY5KqkpHWOebm3TFFoqkePcD3IiIKA9ZCkfeUjFPQYYfXPEXJVsTPM6EFnBSRghim0FGs2Snz00R7RbgnrNO+Svlbbe0AjoZLzMzDL7kkMvEpbRW08SiSvYgo3Xj9iEGHRtc+v47zaMRFNYCOP2gefXLYZYyISF6UI9o1Zj7347qMWudpICSpkkRrcivH0eo3EwNJl11vLinC1hQVIJR0DfxM9MdDyDfwpMp+FsUxf6kJxdOYu1n1lIzM83e23IM4CdYbvQLD52HvdIHVd3+6jaL41G9kG0iL06MwTE9k2wABTgbeTx/A=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Please Perform Merge to complete the request.","request_id":"9bc76b92db94482a9b45ae97ee805835"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '10',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'e08ae32c-5f05-4ff5-9183-5c36ffeb9642',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:42:01 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1270' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/pending/merge')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '318cc33d-fff2-4691-8d8e-29cf2445c069',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:42:01 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '16eb4069-0743-4a83-b37d-bb8f19340400',
  'x-ms-ests-server',
  '2.1.9368.5 - WUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Ar9CTSXAJlZPsYlizB9072s_aSJHAwAAABewCNUOAAAA; expires=Wed, 09-Oct-2019 20:42:02 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; HttpOnly',
  'Date',
  'Mon, 09 Sep 2019 20:42:01 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/pending/merge', {"x5c":["TUlJQzBqQ0NBYm9DQ1FDdldWdWMxOXF5Q2pBTkJna3Foa2lHOXcwQkFRc0ZBREJGTVFzd0NRWURWUVFHRXdKQlZURVRNQkVHQTFVRUNBd0tVMjl0WlMxVGRHRjBaVEVoTUI4R0ExVUVDZ3dZU1c1MFpYSnVaWFFnVjJsa1oybDBjeUJRZEhrZ1RIUmtNQjRYRFRFNU1Ea3dPVEl3TkRJd01Wb1hEVEU1TVRBd09USXdOREl3TVZvd0VURVBNQTBHQTFVRUF4TUdUWGxEWlhKME1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBd25WeEl5OEZwQkdLZkRnNWRaa2NIejFvaHI2Tm1lcm81U2lwSHJEU2R4eVROeTJQckt5bllxK1lJdFdHOEFuQmxyWVQ3SXFLQVpYbk1MWW9paTExVEhoMWtMcm9FeVZkdHcrQmdDZFhPb2p3Z3M2RTN1UFUxQUVOMm5QekZXSmNCSzZhVHVpaTNkTFY2cFNNdDYyS2Y3WGV5V0RXaWQyUWprZDVONVd2U1hTbTNOVHB6ejlQUWpkQkxQMUhSTnhzS1EwMUFyajhnR0RHNitMdkR2TWpKUkQ2M1RqaDJRVXZmYWlGbWdHTUNhdWF5UndNWWF2aDJ4blliWVZNZVBQNjBaRXdBS2R4cnNvVjgzaktMUFVLZ3JiaFBNOHdZUTlVQWxXQnVRU3c2cnJwbXk5RHhsVnFURW9QMnliUzJDZDYzMFZSRkpvOUhVZG43YkhsV2J0ZHRRSURBUUFCTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElCQVFBL0VnZXZTZS9td3d0REI5azN4R0FzVzF0RkoxclZxM1ZZWHlEL2R6VEtKOUcwVGY2RGpMeEVacytXM1d5WWlrNGp6Z2NTakl1RWlUVTA1ZnFxbnNDQ1RqbFlhalR3b2xPclA1bFVxN3J5M2Nta2Q4Sm8zcXZHdEdveDBGWFJkanNFNHptTURaVzRZYUdHblBMZkpjblpxN2NRQ21taWJ0UGIrQVorV2pzd09hS1BwL2UvbEtHUHplMWdkTnpVL0tIYmEyMG5UaXJJbVlxZ3hTNkVLOTcvVXlLbFhFSWRxNFVLZDV4aUdBUkdMWnVMUjFXR0dGSEMwdzdjUVp6c0dsbGtaN0h0RmFpNmR1NU10dXk4dVQ3S0hDWFNNc0g3bTdjdWJTRXJWRGdZajVRUjVPTXVDQzJobFdObXUwalhUWHBDMUJ6TEVKeCt4RzVIVk1TQWZMRWYtLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t"]})
  .query(true)
  .reply(201, {"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/46946f0a4e94494da511052744b35c85","kid":"https://keyvault_name.vault.azure.net/keys/mergeCertificateName-canmergeaselfsignedcertificate-/46946f0a4e94494da511052744b35c85","sid":"https://keyvault_name.vault.azure.net/secrets/mergeCertificateName-canmergeaselfsignedcertificate-/46946f0a4e94494da511052744b35c85","x5t":"cLS6AvNUH60tKpvDvsgvtXtDkPg","cer":"MIIC0jCCAboCCQCvWVuc19qyCjANBgkqhkiG9w0BAQsFADBFMQswCQYDVQQGEwJBVTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UECgwYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMB4XDTE5MDkwOTIwNDIwMVoXDTE5MTAwOTIwNDIwMVowETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwnVxIy8FpBGKfDg5dZkcHz1ohr6Nmero5SipHrDSdxyTNy2PrKynYq+YItWG8AnBlrYT7IqKAZXnMLYoii11THh1kLroEyVdtw+BgCdXOojwgs6E3uPU1AEN2nPzFWJcBK6aTuii3dLV6pSMt62Kf7XeyWDWid2Qjkd5N5WvSXSm3NTpzz9PQjdBLP1HRNxsKQ01Arj8gGDG6+LvDvMjJRD63Tjh2QUvfaiFmgGMCauayRwMYavh2xnYbYVMePP60ZEwAKdxrsoV83jKLPUKgrbhPM8wYQ9UAlWBuQSw6rrpmy9DxlVqTEoP2ybS2Cd630VRFJo9HUdn7bHlWbtdtQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQA/EgevSe/mwwtDB9k3xGAsW1tFJ1rVq3VYXyD/dzTKJ9G0Tf6DjLxEZs+W3WyYik4jzgcSjIuEiTU05fqqnsCCTjlYajTwolOrP5lUq7ry3cmkd8Jo3qvGtGox0FXRdjsE4zmMDZW4YaGGnPLfJcnZq7cQCmmibtPb+AZ+WjswOaKPp/e/lKGPze1gdNzU/KHba20nTirImYqgxS6EK97/UyKlXEIdq4UKd5xiGARGLZuLR1WGGFHC0w7cQZzsGllkZ7HtFai6du5Mtuy8uT7KHCXSMsH7m7cubSErVDgYj5QR5OMuCC2hlWNmu0jXTXpC1BzLEJx+xG5HVMSAfLEf","attributes":{"enabled":true,"nbf":1568061721,"exp":1570653721,"created":1568061722,"updated":1568061722,"recoveryLevel":"Recoverable+Purgeable"},"policy":{"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/policy","key_props":{"exportable":true,"kty":"RSA","key_size":2048,"reuse_key":false},"secret_props":{"contentType":"application/x-pkcs12"},"x509_props":{"subject":"cn=MyCert","ekus":["1.3.6.1.5.5.7.3.1","1.3.6.1.5.5.7.3.2"],"key_usage":["digitalSignature","keyEncipherment"],"validity_months":12,"basic_constraints":{"ca":false}},"lifetime_actions":[{"trigger":{"lifetime_percentage":80},"action":{"action_type":"EmailContacts"}}],"issuer":{"name":"Unknown","cert_transparency":false},"attributes":{"enabled":true,"created":1568061720,"updated":1568061720}},"pending":{"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/pending"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canmergeaselfsignedcertificate-?api-version=7.0',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '54f0b26e-45a6-4a38-9233-c5ac3fcbcf00',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:42:02 GMT',
  'Connection',
  'close',
  'Content-Length',
  '2461' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/certificates/mergeCertificateName-canmergeaselfsignedcertificate-')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'dbc27830-0bf8-4990-9d97-c3fafab38b82',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:42:02 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  'b7c21359-87d4-44ca-9acd-39ab8ede9f00',
  'x-ms-ests-server',
  '2.1.9338.12 - NCUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Ar9CTSXAJlZPsYlizB9072s_aSJHBAAAABewCNUOAAAA; expires=Wed, 09-Oct-2019 20:42:03 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; HttpOnly',
  'Date',
  'Mon, 09 Sep 2019 20:42:02 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/certificates/mergeCertificateName-canmergeaselfsignedcertificate-')
  .query(true)
  .reply(200, {"recoveryId":"https://keyvault_name.vault.azure.net/deletedcertificates/mergeCertificateName-canmergeaselfsignedcertificate-","deletedDate":1568061723,"scheduledPurgeDate":1575837723,"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/46946f0a4e94494da511052744b35c85","kid":"https://keyvault_name.vault.azure.net/keys/mergeCertificateName-canmergeaselfsignedcertificate-/46946f0a4e94494da511052744b35c85","sid":"https://keyvault_name.vault.azure.net/secrets/mergeCertificateName-canmergeaselfsignedcertificate-/46946f0a4e94494da511052744b35c85","x5t":"cLS6AvNUH60tKpvDvsgvtXtDkPg","cer":"MIIC0jCCAboCCQCvWVuc19qyCjANBgkqhkiG9w0BAQsFADBFMQswCQYDVQQGEwJBVTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UECgwYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMB4XDTE5MDkwOTIwNDIwMVoXDTE5MTAwOTIwNDIwMVowETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwnVxIy8FpBGKfDg5dZkcHz1ohr6Nmero5SipHrDSdxyTNy2PrKynYq+YItWG8AnBlrYT7IqKAZXnMLYoii11THh1kLroEyVdtw+BgCdXOojwgs6E3uPU1AEN2nPzFWJcBK6aTuii3dLV6pSMt62Kf7XeyWDWid2Qjkd5N5WvSXSm3NTpzz9PQjdBLP1HRNxsKQ01Arj8gGDG6+LvDvMjJRD63Tjh2QUvfaiFmgGMCauayRwMYavh2xnYbYVMePP60ZEwAKdxrsoV83jKLPUKgrbhPM8wYQ9UAlWBuQSw6rrpmy9DxlVqTEoP2ybS2Cd630VRFJo9HUdn7bHlWbtdtQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQA/EgevSe/mwwtDB9k3xGAsW1tFJ1rVq3VYXyD/dzTKJ9G0Tf6DjLxEZs+W3WyYik4jzgcSjIuEiTU05fqqnsCCTjlYajTwolOrP5lUq7ry3cmkd8Jo3qvGtGox0FXRdjsE4zmMDZW4YaGGnPLfJcnZq7cQCmmibtPb+AZ+WjswOaKPp/e/lKGPze1gdNzU/KHba20nTirImYqgxS6EK97/UyKlXEIdq4UKd5xiGARGLZuLR1WGGFHC0w7cQZzsGllkZ7HtFai6du5Mtuy8uT7KHCXSMsH7m7cubSErVDgYj5QR5OMuCC2hlWNmu0jXTXpC1BzLEJx+xG5HVMSAfLEf","attributes":{"enabled":true,"nbf":1568061721,"exp":1570653721,"created":1568061722,"updated":1568061722,"recoveryLevel":"Recoverable+Purgeable"},"policy":{"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/policy","key_props":{"exportable":true,"kty":"RSA","key_size":2048,"reuse_key":false},"secret_props":{"contentType":"application/x-pkcs12"},"x509_props":{"subject":"cn=MyCert","ekus":["1.3.6.1.5.5.7.3.1","1.3.6.1.5.5.7.3.2"],"key_usage":["digitalSignature","keyEncipherment"],"validity_months":12,"basic_constraints":{"ca":false}},"lifetime_actions":[{"trigger":{"lifetime_percentage":80},"action":{"action_type":"EmailContacts"}}],"issuer":{"name":"Unknown","cert_transparency":false},"attributes":{"enabled":true,"created":1568061720,"updated":1568061720}},"pending":{"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canmergeaselfsignedcertificate-/pending"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '188cb4c3-d2c5-4930-b2ad-a0fa9aa9ebd9',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:42:03 GMT',
  'Connection',
  'close',
  'Content-Length',
  '2658' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedcertificates/mergeCertificateName-canmergeaselfsignedcertificate-')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '4aff32f5-72e7-4527-84e6-ef1b76e2d28b',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:42:03 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '6a04f2e9-2544-46e7-aa43-9ae598729e00',
  'x-ms-ests-server',
  '2.1.9338.12 - NCUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Ar9CTSXAJlZPsYlizB9072s_aSJHBQAAABewCNUOAAAA; expires=Wed, 09-Oct-2019 20:42:04 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; HttpOnly',
  'Date',
  'Mon, 09 Sep 2019 20:42:04 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedcertificates/mergeCertificateName-canmergeaselfsignedcertificate-')
  .query(true)
  .reply(409, {"error":{"code":"Conflict","message":"Certificate is currently being deleted.","innererror":{"code":"ObjectIsBeingDeleted"}}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '126',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '754141a8-fe4c-475f-a6b0-218f04a0afbb',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:42:04 GMT',
  'Connection',
  'close' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedcertificates/mergeCertificateName-canmergeaselfsignedcertificate-')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '18126cfc-ed72-4834-a39b-89e19eb61ad7',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:42:13 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '60a055c6-a76c-4b64-b18d-166a965a9b00',
  'x-ms-ests-server',
  '2.1.9338.12 - EUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Ar9CTSXAJlZPsYlizB9072s_aSJHBgAAABewCNUOAAAA; expires=Wed, 09-Oct-2019 20:42:14 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; HttpOnly',
  'Date',
  'Mon, 09 Sep 2019 20:42:14 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedcertificates/mergeCertificateName-canmergeaselfsignedcertificate-')
  .query(true)
  .reply(204, "", [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '1d9bbd7e-f4b3-410e-8aa7-6bb9a95de875',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:42:15 GMT',
  'Connection',
  'close' ]);

