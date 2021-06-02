import { DynamoDB } from 'aws-sdk';
import { accessKeyId, secretAccessKey } from '../constants/config';
let db: DynamoDB.DocumentClient;
if (process.env.NODE_ENV === 'dev') {
  db = new DynamoDB.DocumentClient({
    accessKeyId: accessKeyId, // needed if you don't have aws credentials at all in env
    secretAccessKey: secretAccessKey,
  });
} else {
  db = new DynamoDB.DocumentClient();
}

export { db };
