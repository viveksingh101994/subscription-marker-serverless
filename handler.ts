import { Handler } from 'aws-lambda';
import { healthCheckHandler } from './src/health-check';
import { authorizor } from './src/authorizor';

export const healthCheck: Handler = async (event: any) =>
  healthCheckHandler(event);

export const authorizerFunc: Handler = async (event, context, callback) =>
  authorizor(event, context, callback);
