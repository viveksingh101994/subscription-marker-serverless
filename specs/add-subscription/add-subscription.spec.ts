import { addSubscriptionHandler } from '../../src/add-subsciption';
import { DBOperations } from '../../src/models/db-opeation.queries';

describe('Add subscription', () => {
  let dbInstanceStub: jest.SpyInstance;
  beforeAll(() => {
    dbInstanceStub = jest
      .spyOn(DBOperations, 'put')
      .mockReturnValue(Promise.resolve());
  });

  it.only('should store user subscription for valid subscription', async () => {
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
