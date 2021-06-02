import { EFFECT } from '../constants/enum';

export const buildIAMPolicy = (
  userId: string,
  effect: EFFECT,
  resource: string,
  context: any
) => {
  const policy = {
    principalId: userId,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: '*',
        },
      ],
    },
    context,
  };

  return policy;
};
