import { subscriptionTable } from '../constants/config';
import { IUserSubscription } from '../constants/interaces';
import { DBOperations } from './db-opeation.queries';

export class UserSubscriptionRepository {
  private static readonly tableName = subscriptionTable;

  public static async addSubscription(item: IUserSubscription): Promise<void> {
    try {
      await DBOperations.put<IUserSubscription>({
        TableName: this.tableName,
        Item: item,
      });
    } catch (err) {
      throw err;
    }
  }
}
