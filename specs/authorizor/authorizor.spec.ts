import { authorizor } from '../../src/authorizor';

describe('Authorizor', () => {
  it('should give unauthorized for invalid token', async () => {
    const callback = (response: any) => {
      expect(response).toBe('Unauthorized');
    };
    await authorizor({ authorizationToken: 'invalid' }, null, callback);
  });

  it('should give unauthorized for invalid token with bearer', async () => {
    const callback = (response: any) => {
      expect(response).toBe('Unauthorized');
    };
    await authorizor({ authorizationToken: 'Bearer invalid' }, null, callback);
  });

  it('should give context for valid token', async () => {
    const callback = (error: any, response: any) => {
      expect(error).toBe(null);
      expect(response).toHaveProperty('context');
      expect(response.context).toHaveProperty('user');
    };
    await authorizor(
      { authorizationToken: 'Bearer 89abddfb-2cff-4fda-83e6-13221f0c3d4f' },
      null,
      callback
    );
  });
});
