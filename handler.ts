import { Handler } from 'aws-lambda';
import { healthCheckHandler } from './src/health-check';
import { authorizor } from './src/authorizor';
import { addSubscriptionHandler } from './src/add-subsciption';
import { calculateReportHandler } from './src/calculation-report';

export const healthCheck: Handler = async (event: any) =>
  healthCheckHandler(event);

export const authorizerFunc: Handler = async (event, context, callback) =>
  authorizor(event, context, callback);

export const addSubscription: Handler = async (event: any) =>
  addSubscriptionHandler(event);

export const calculateSubscription: Handler = async (event: any) =>
  calculateReportHandler(event);
