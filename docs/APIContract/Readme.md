# API Contract

## Overview

RESTful Contracts provides access to resources via URI paths. To use RESTful Contracts, your application will make HTTP requests to RESTful Contracts' URIs. The request and response payload content type is in application/json.

## Endpoints

### Health-Check

- URL

  `/prod/healthcheck`

- Method

  GET

- Success Response

  - Code: 200
  - Content

  ```json
  {
    "message": "Node serverless! Your function executed succesfully"
  }
  ```

### Subscription

- URL

  `/prod/subscription`

- Method

  `POST`

- Authorization

  `Bearer Token`

- Sample Call

  ```javascript
  headers: {
      Authorization: "Bearer 89abddfb-2cff-4fda-83e6-13221f0c3d4f"
  },
  body: UserSubscription[]
  ```

- UserSubscription

  ```typescript
  interface UserSubscription {
    name: string;
    type: 1 | 2; // Monthly for 1 and 2 for Annual
    amount: number;
    currency: 'USD' | 'GBP';
    date: string; // dd-mm-yyyy
  }
  ```

- Success Response

  - Code: 200
  - Content

    ```json
    {
      "status": "subscription added successfully"
    }
    ```

- Invalid Request Response

  - Code: 401
  - Content

    ```json
    {
      "status": "invalid parameters"
    }
    ```

- Error Response

  - Code: 500
  - Content:
    ```json
    {
      "status": "internal server error"
    }
    ```

- Unauthorized Response

  - Code: 400
  - Content

    ```json
    {
      "message": "Unauthorized"
    }
    ```
