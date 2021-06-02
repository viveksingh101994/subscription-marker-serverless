export const calculationReportMock = {
  Records: [
    {
      eventID: 'a3571c962813ac401fb58b7c5df956af',
      eventName: 'INSERT',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'us-east-1',
      dynamodb: {
        ApproximateCreationDateTime: 1622661300,
        Keys: {
          email: {
            S: '"test-dummy@test.com"',
          },
        },
        NewImage: {
          subscription: {
            L: [
              {
                M: {
                  date: {
                    S: '02-06-2021',
                  },
                  amount: {
                    N: '100',
                  },
                  name: {
                    S: 'sdsd',
                  },
                  currency: {
                    S: 'USD',
                  },
                  type: {
                    N: '2',
                  },
                },
              },
              {
                M: {
                  date: {
                    S: '02-06-2021',
                  },
                  amount: {
                    N: '100',
                  },
                  name: {
                    S: 's',
                  },
                  currency: {
                    S: 'GBP',
                  },
                  type: {
                    N: '1',
                  },
                },
              },
            ],
          },
          email: {
            S: '"test-dummy@test.com"',
          },
        },
        SequenceNumber: '100000000012463150069',
        SizeBytes: 176,
        StreamViewType: 'NEW_AND_OLD_IMAGES',
      },
      eventSourceARN:
        'arn:aws:dynamodb:us-east-1:714754100721:table/bits-subscription-dev/stream/2021-06-02T19:09:40.787',
    },
  ],
};

export const calculationExceptionReportMock = {
  Records: [
    {
      eventID: 'a3571c962813ac401fb58b7c5df956af',
      eventName: 'INSERT',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'us-east-1',
      dynamodb: {
        ApproximateCreationDateTime: 1622661300,
        Keys: {
          email: {
            S: '"error"',
          },
        },
        NewImage: {
          subscription: {
            L: [
              {
                M: {
                  date: {
                    S: '02-06-2021',
                  },
                  amount: {
                    N: '100',
                  },
                  name: {
                    S: 'sdsd',
                  },
                  currency: {
                    S: 'USD',
                  },
                  type: {
                    N: '2',
                  },
                },
              },
              {
                M: {
                  date: {
                    S: '02-06-2021',
                  },
                  amount: {
                    N: '100',
                  },
                  name: {
                    S: 's',
                  },
                  currency: {
                    S: 'GBP',
                  },
                  type: {
                    N: '1',
                  },
                },
              },
            ],
          },
          email: {
            S: '"error"',
          },
        },
        SequenceNumber: '100000000012463150069',
        SizeBytes: 176,
        StreamViewType: 'NEW_AND_OLD_IMAGES',
      },
      eventSourceARN:
        'arn:aws:dynamodb:us-east-1:714754100721:table/bits-subscription-dev/stream/2021-06-02T19:09:40.787',
    },
  ],
};
