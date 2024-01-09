/* eslint-disable no-unused-vars */
import Currency from './3-currency';

export default class Pricing {
  /* eslint-disable no-underscore-dangle */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(setAmount) {
    this._amount = setAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(setCurrency) {
    this._currency = setCurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} ${this.currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
