import { healthCheckHandler } from '../src/health-check';

describe('healthCheckHandler', () => {
  it('should give statusCode as 200 and body as string', () => {
    const response = healthCheckHandler('test');
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toMatchObject({
      message: 'Node serverless! Your function executed succesfully',
    });
  });
});
