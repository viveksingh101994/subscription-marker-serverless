import { CURRENCY, SUBSCRIPTION_TYPE } from './enum';

export interface ISubscription {
  name: string;
  type: SUBSCRIPTION_TYPE;
  amount: number;
  currency: CURRENCY;
  date: string;
}

export interface IDBOperation<T> {
  TableName: string;
  Item: T;
}

export interface IUserSubscription {
  email: string;
  subscription: ISubscription[];
}

export interface IUserReport {
  email: string;
  totalAmount: number;
  currency: CURRENCY;
  score: number;
  subscription: ISubscription[];
}

export interface IReportMetadata {
  S3Key: string;
}

export interface IUserReportRepository extends IUserReport, IReportMetadata {}
