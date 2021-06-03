import { addSubscriptionHandler } from '../../src/add-subsciption';
import { DBOperations } from '../../src/models/db-opeation.queries';
import { IDBOperation, IUserSubscription } from '../../src/constants/interaces';
import {
  addSubscriptionInvalidMock,
  addSubscriptionMock,
} from '../mocks/add-subscription.mock';

describe('Add subscription', () => {
  let dbInstanceStub: jest.SpyInstance;
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
          user: "'error'",
        },
      },
      body: JSON.stringify(addSubscriptionMock),
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
      body: JSON.stringify(addSubscriptionMock),
    });
    const parsedBody = JSON.parse(response.body);
    expect(response.statusCode).toBe(200);
    expect(parsedBody).toHaveProperty('status');
    expect(parsedBody).toMatchObject({
      status: 'subscription added successfully',
    });
  });

  it('should give invalid parameters if name is number instead of strings', async () => {
    const response = await addSubscriptionHandler({
      requestContext: {
        authorizer: {
          user: 'test',
        },
      },
      body: JSON.stringify(addSubscriptionInvalidMock),
    });
    expect(response.statusCode).toBe(401);
  });

  afterAll(() => {
    dbInstanceStub.mockRestore();
  });
});
