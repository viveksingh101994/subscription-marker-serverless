import { addSubscriptionHandler } from '../../src/add-subsciption';
import { DBOperations } from '../../src/models/db-opeation.queries';
import { IDBOperation, IUserSubscription } from '../../src/constants/interaces';

describe('Add subscription', () => {
  let dbInstanceStub: jest.SpyInstance;
  let dbIntancesStubThrowError: jest.SpyInstance;
  beforeAll(() => {
    dbInstanceStub = jest
      .spyOn(DBOperations, 'put')
      .mockImplementation(
        async ({ Item }: IDBOperation<IUserSubscription>): Promise<void> => {
          if (Item.email === 'error') {
            return Promise.reject('error');
          } else {
            return Promise.resolve();
          }
        }
      );
  });

  it('should throw error if exception is thrown', async () => {
    const response = await addSubscriptionHandler({
      requestContext: {
        authorizer: {
          user: 'error',
        },
      },
      body: {},
    });
    expect(response.statusCode).toBe(500);
    expect(JSON.parse(response.body)).toMatchObject({
      status: 'internal server error',
    });
  });

  it('should store user subscription for valid subscription', async () => {
    const response = await addSubscriptionHandler({
      requestContext: {
        authorizer: {
          user: 'test',
        },
      },
      body: {},
    });
    const parsedBody = JSON.parse(response.body);
    expect(response.statusCode).toBe(200);
    expect(parsedBody).toHaveProperty('status');
    expect(parsedBody).toMatchObject({
      status: 'subscription added successfully',
    });
  });
  afterAll(() => {
    dbInstanceStub.mockRestore();
  });
});
