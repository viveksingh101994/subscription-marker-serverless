import { UserSubscriptions } from './models/user-subscription';
export const addSubscriptionHandler = async (event: any) => {
  try {
    const email = event.requestContext.authorizer.user;
    const userSubscriptions = {
      email,
      subscription: event.body,
    };
    await UserSubscriptions.addSubscription(userSubscriptions);
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
