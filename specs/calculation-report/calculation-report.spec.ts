import { storage } from '../../src/s3';
import {
  IDBOperation,
  IUserReportRepository,
} from '../../src/constants/interaces';
import { DBOperations } from '../../src/models/db-opeation.queries';
import { calculateReportHandler } from '../../src/calculation-report';
import {
  calculationExceptionReportMock,
  calculationReportMock,
} from '../../specs/mocks/calculation-report.mock';

describe('Calculate Report', () => {
  let dbInstanceStub: jest.SpyInstance;
  let s3Stub: jest.SpyInstance;

  beforeAll(() => {
    dbInstanceStub = jest
      .spyOn(DBOperations, 'put')
      .mockImplementation(
        async ({
          Item,
        }: IDBOperation<IUserReportRepository>): Promise<void> => {
          if (Item.email === '"error"') {
            return Promise.reject('error');
          } else {
            return Promise.resolve();
          }
        }
      );
    s3Stub = jest
      .spyOn(storage, 'saveAsJSON')
      .mockImplementation(() => Promise.resolve());
  });
  it('should save report in S3 and DynamoDB', async () => {
    await calculateReportHandler(calculationReportMock);
    expect(dbInstanceStub).toHaveBeenCalled();
    expect(s3Stub).toHaveBeenCalled();
  });

  it('should throw error if an exception is thrown', async () => {
    try {
      await calculateReportHandler(calculationExceptionReportMock);
    } catch (err) {
      expect(err).toBe('error');
    }
  });
  afterAll(() => {
    dbInstanceStub.mockRestore();
    s3Stub.mockRestore();
  });
});
