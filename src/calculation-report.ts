import { ISubscription, IUserSubscription } from './constants/interaces';
import { Report } from './models/report';
import { ReportSubscriptionRepository } from './models/report-subscription-repository';
import { storage } from './s3';

export const calculateReportHandler = async (event: any) => {
  try {
    const report = new Report(parseReport(event));
    const generatedReport = report.generate();
    const s3Key = storage.generateKey(generatedReport.email);
    await Promise.all([
      ReportSubscriptionRepository.putDB({ ...generatedReport, S3Key: s3Key }),
      ReportSubscriptionRepository.putS3(generatedReport, s3Key),
    ]);
    console.log('Report Generated Successfully');
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const parseReport = (event: any): IUserSubscription => {
  const { Records } = event;
  for (const record of Records) {
    const { dynamodb } = record;
    const {
      Keys: {
        email: { S: email },
      },
      NewImage: {
        subscription: { S: newSubscription },
      },
    } = dynamodb;
    return {
      email,
      subscription: JSON.parse(newSubscription) as ISubscription[],
    };
  }
};
