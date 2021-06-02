import { subscriptionTable } from '../constants/config';
import { IUserSubscription } from '../constants/interaces';
import { DBOperations } from './db-opeation.queries';

export class UserSubscriptions {
  private static readonly tableName = subscriptionTable;

  public static async addSubscription(item: IUserSubscription): Promise<void> {
    await DBOperations.put({ TableName: this.tableName, Item: item });
  }
}
