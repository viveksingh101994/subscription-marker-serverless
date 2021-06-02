import { EFFECT } from './constants/enum';
import { buildIAMPolicy } from './utils/build-iam-policy';

export const authorizor = async (
  event: any,
  context: any,
  callback: Function
): Promise<void> => {
  const { authorizationToken } = event;
  const token = authorizationToken.replace('Bearer ', '');
  console.log(token);
  if (token === '89abddfb-2cff-4fda-83e6-13221f0c3d4f') {
    console.log(token);
    const effect = EFFECT.ALLOW;
    const userId = 'test-dummy@test.com';
    const user = {
      email: userId,
    };
    const authorizerContext = { user: JSON.stringify(user.email) };
    const policyDocument = buildIAMPolicy(
      userId,
      effect,
      event.methodArn,
      authorizerContext
    );
    return callback(null, policyDocument);
  } else {
    return callback('Unauthorized');
  }
};
