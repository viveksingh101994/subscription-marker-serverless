import { reportTable, s3Report } from '../../src/constants/config';
import {
  IUserReport,
  IUserReportRepository,
} from '../../src/constants/interaces';
import { storage } from '../../src/s3';
import { DBOperations } from './db-opeation.queries';

export class ReportSubscriptionRepository {
  private static tableName: string = reportTable;
  private static s3Report: string = s3Report;
  public static async putDB(item: IUserReportRepository) {
    try {
      await DBOperations.put<IUserReportRepository>({
        TableName: this.tableName,
        Item: item,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public static async putS3(item: IUserReport, key: string) {
    await storage.saveAsJSON(this.s3Report, key, JSON.stringify(item));
  }
}
