import { Handler } from 'aws-lambda';
import { healthCheckHandler } from './src/health-check';

export const healthCheck: Handler = async (event: any) =>
  healthCheckHandler(event);
