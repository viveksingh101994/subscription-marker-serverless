# High Level Plan

### Components

- AWS Lambda

  - It will be handle autoscaling on its own and will handle huge load easily

- API Gateway

  - It will allow us to deploy multiple endpoints and can add authorizor easily with serverless settings

- DynamoDB

  - It will allow us to save the data
  - It will give us the capability of dynamoStream which will give us to use Event-driven architecture
    - This will allow us to handle huge number of request within milliseconds

- S3

  - It will be used to save reports PDF if needed (Currently we have only final output)
    - TODO (Save PDF for the user)

- ReportLambda
  - It will calculate the report of the subscriptions
    - TODO
      - API for calculating score and updating the score
      - PDF save logic (if required)
      - SNS can be used if notification sending is required

### Flow Chart

![Flow Chart](./high-level.png)

### Another Approach

- Use AWS EKS (Kubernetes)

![Flow Chart](./kubernetes.png)

#### Detailed Design (Micro-service architecture)

- Gateway will be connected to Authorizor pod
- After validation, request will upstream to add subscription pod
- Add Subscription Pod will insert into db and send message to Kafka and user will recieve response 200
- Report generator pod will consume the kafka message and will process the report and calculate it via 3rd party api or any algorithms
- After calculation will generate PDF(if needed) in S3 and latest report in DB
  > (Optional)
  >
  > - After saving it in DB will send message to Notification Queue(Topic in Kafka)
  > - Notification service pod will consume the message and will send to the user that report is generated.
