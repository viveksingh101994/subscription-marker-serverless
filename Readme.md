# Assignment: Bits Senior Software Engineer - API

Bits is planning to help customers build better credit score by leveraging their existing commitments. This new product will enable Bits customers to be able to submit their monthly recurring payments from their existing bank account. These recurring payments can be a Netflix Subscription, a Gym Membership or even their Rent. By submitting this information to Bits, Bits will be able to create a report on a monthly basis and can add these successful commitments to their customer’s credit file.

You are assigned to design and implement a new API for supporting this new product. Functional and non-functional requirements for this new API are described below.

### Please provide your solution covering the following points:

- [API Contracts](./docs/APIContract/Readme.md)
- [System design using AWS services](./docs/SystemDesign/Readme.md)
- [Security & Access Management of API and data](./docs/Security/Readme.md)
- [Implementation of recurring payment data submission endpoint](./docs/APIContract/Readme.md)
- [High level plan of how to operate this new API to serve 100K monthly active users](./docs/HighLevelPlan/Readme.md)

### Assessment Points:

- Use of Javascript, Typescript or Java as your main programming language and providing a GraphQL or REST API
- Use of AWS services for high availability and scalability in system design.
- Clear documentation of your design to your team and product management.
- Ability to run your solution on local and deploy to AWS
- Maintainable, easy to understand code style and conventions.

---

### Project Description

Project is developed using serverless framework and Node(Typescript)

#### AWS Component Used

- Lambda
- DynamoDB
- SQS-DLQ
- S3

#### Commands

- Install dependencies `npm install`
- Run code in local `npm start` (Note:- DynamoDB/S3 should be created before hand if needed to run locally)
- Run test cases `npm test`
- Fix prettier `npm run fix:prettier`
- Fix eslint `npm run fix:eslint`

#### Deployment

- Run `serverless configure`
  - Enter AWS_ACCESS_ID
  - Enter AWS_SECRET_KEY
- Set Environment variable `AWS_STAGE='prod'`
- Run `serverless deploy`

#### Environment Variables

```.env
SUBSCRIPTION_DYNAMODB_TABLE = 'subscription-bits-dev'
REPORT_DYNAMODB_TABLE = 'report-bits-dev'
S3_REPORT_BUCKET = 'report-bucket-dev'
AWS_STAGE = 'local' //on local
AWS_ACCESS_KEY = ''
AWS_SECRET_ACCESS_KEY = ''
```

#### About Project structure

- Handler.ts
  - Entry point of the events
- Specs
  - Unit test cases
- Src
  - Contains the source code
- Serverless.yml
  - Contains serverless configurations
- Resources
  - Contains resources required for serverless
