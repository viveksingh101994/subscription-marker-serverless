import { UserSubscriptions } from './models/user-subscription';
export const addSubscriptionHandler = async (event: any) => {
  const email = event.requestContext.authorizer.user;
  const userSubscriptions = {
    email,
    subscription: event.body,
  };
  await UserSubscriptions.addSubscription(userSubscriptions).catch(
    (err) => err
  );
  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'subscription added successfully' }),
  };
};
