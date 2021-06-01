export const healthCheckHandler = (event: any): IHealthResponse => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'Node serverless! Your function executed succesfully',
      input: event,
    },
    null,
    2
  ),
});

interface IHealthResponse {
  statusCode: 200;
  body: string;
}
