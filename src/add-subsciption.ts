import { CURRENCY, SUBSCRIPTION_TYPE } from './constants/enum';
import { ISubscription, IUserSubscription } from './constants/interaces';
import { UserSubscriptionRepository } from './models/user-subscription-repository';
export const addSubscriptionHandler = async (event: any) => {
  try {
    const parsedBody = JSON.parse(event.body);
    if (validateRequest(parsedBody)) {
      return {
        statusCode: 401,
        body: JSON.stringify({ status: 'invalid parameters' }),
      };
    }
    let email = event.requestContext.authorizer.user;
    email = email.substr(1, email.length - 2);
    const userSubscriptions = {
      email,
      subscription: parsedBody,
    };
    await UserSubscriptionRepository.addSubscription(userSubscriptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'subscription added successfully' }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'internal server error' }),
    };
  }
};

const validateRequest = (subscriptions: ISubscription[]) => {
  for (const subscription of subscriptions) {
    if (
      typeof subscription.amount !== 'number' ||
      ![CURRENCY.GBP, CURRENCY.USD].includes(subscription.currency) ||
      typeof subscription.date !== 'string' ||
      typeof subscription.name !== 'string' ||
      ![SUBSCRIPTION_TYPE.ANNUAL, SUBSCRIPTION_TYPE.MONTHLY].includes(
        subscription.type
      )
    ) {
      return true;
    }
  }
  return false;
};
