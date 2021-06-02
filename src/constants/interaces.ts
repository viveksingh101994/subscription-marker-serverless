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
