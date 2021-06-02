import { CURRENCY } from '../constants/enum';
import {
  ISubscription,
  IUserSubscription,
  IUserReport,
} from '../constants/interaces';

export class Report {
  private readonly email: string;
  private readonly subscriptions: ISubscription[];

  constructor({ email, subscription }: IUserSubscription) {
    this.email = email;
    this.subscriptions = subscription;
  }

  public generate(): IUserReport {
    const subscription: ISubscription[] = this.subscriptions.map(
      (subscription) => ({
        ...subscription,
        amount:
          subscription.currency !== CURRENCY.GBP
            ? this.convertToGBP(subscription.amount)
            : subscription.amount,
        currency: CURRENCY.GBP,
      })
    );
    const totalAmount = this.totalAmount(subscription);
    return {
      subscription,
      totalAmount,
      email: this.email,
      score: this.calculateScore(totalAmount),
      currency: CURRENCY.GBP,
    };
  }

  private totalAmount(subscription: ISubscription[]): number {
    return this.subscriptions
      .map((x) => x.amount)
      .reduce((prev, curr) => prev + curr, 0);
  }

  private convertToGBP(amount: number): number {
    return parseFloat(amount.toString()) * 2.03032;
  }

  private calculateScore(amount: number): number {
    // calculate the score and return new score
    return amount * 0.01 + amount;
  }
}
