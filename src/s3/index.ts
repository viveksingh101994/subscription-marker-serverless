import { S3 } from 'aws-sdk';

class Storage {
  private readonly instance: S3;
  constructor() {
    this.instance = new S3();
  }
  public generateKey(key: string): string {
    return `${key}-${new Date().getTime()}.json`;
  }
  public saveAsJSON(bucket: string, key: string, body: string): Promise<any> {
    return this.instance
      .putObject({
        Bucket: bucket,
        Key: key,
        Body: body,
      })
      .promise();
  }
}

export const storage = new Storage();
