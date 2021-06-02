import { IDBOperation } from '../constants/interaces';
import { db } from '../db';

export class DBOperations {
  public static async put<T>(obj: IDBOperation<T>): Promise<void> {
    await db.put(obj).promise();
  }
}
