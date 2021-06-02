export const calculationReportMock = {
  Records: [
    {
      eventID: '5861f64c5d9c329690ad876f71fd208e',
      eventName: 'MODIFY',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'us-east-1',
      dynamodb: {
        ApproximateCreationDateTime: 1622641312,
        Keys: {
          email: {
            S: '"test-dummy@test.com"',
          },
        },
        NewImage: {
          subscription: {
            S: '[\r\n    {\r\n        "name": "Netflix",\r\n        "type": 1,\r\n        "amount": 400,\r\n        "currency": "USD",\r\n        "date": "02-06-2021"\r\n    },\r\n    {\r\n        "name": "s",\r\n        "type": 1,\r\n        "amount": 100,\r\n        "currency": "GBP",\r\n        "date": "02-06-2021"\r\n    }\r\n]',
          },
          email: {
            S: '"test-dummy@test.com"',
          },
        },
        OldImage: {
          subscription: {
            S: '[\r\n    {\r\n        "name": "Netflix",\r\n        "type": 1,\r\n        "amount": 100,\r\n        "currency": "GBP",\r\n        "date": "02-06-2021"\r\n    }\r\n]',
          },
          email: {
            S: '"test-dummy@test.com"',
          },
        },
        SequenceNumber: '200000000034694335201',
        SizeBytes: 537,
        StreamViewType: 'NEW_AND_OLD_IMAGES',
      },
      eventSourceARN:
        'arn:aws:dynamodb:us-east-1:714754100721:table/subscription-dev/stream/2021-06-02T13:25:08.948',
    },
  ],
};

export const calculationExceptionReportMock = {
  Records: [
    {
      eventID: '5861f64c5d9c329690ad876f71fd208e',
      eventName: 'MODIFY',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'us-east-1',
      dynamodb: {
        ApproximateCreationDateTime: 1622641312,
        Keys: {
          email: {
            S: 'error',
          },
        },
        NewImage: {
          subscription: {
            S: '[\r\n    {\r\n        "name": "Netflix",\r\n        "type": 1,\r\n        "amount": 400,\r\n        "currency": "USD",\r\n        "date": "02-06-2021"\r\n    },\r\n    {\r\n        "name": "s",\r\n        "type": 1,\r\n        "amount": 100,\r\n        "currency": "GBP",\r\n        "date": "02-06-2021"\r\n    }\r\n]',
          },
          email: {
            S: 'error',
          },
        },
        OldImage: {
          subscription: {
            S: '[\r\n    {\r\n        "name": "Netflix",\r\n        "type": 1,\r\n        "amount": 100,\r\n        "currency": "GBP",\r\n        "date": "02-06-2021"\r\n    }\r\n]',
          },
          email: {
            S: 'error',
          },
        },
        SequenceNumber: '200000000034694335201',
        SizeBytes: 537,
        StreamViewType: 'NEW_AND_OLD_IMAGES',
      },
      eventSourceARN:
        'arn:aws:dynamodb:us-east-1:714754100721:table/subscription-dev/stream/2021-06-02T13:25:08.948',
    },
  ],
};
