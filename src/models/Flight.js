import BaseItem from './BaseItem.js';
export default class Flight extends BaseItem {
  #airline; #price;

  constructor(name, location) {
    super(name, location);
    this.#airline = 'Generic Airline';
    this.#price = 1000;
  }

  get airline() { return this.#airline; }
  get price() { return this.#price; }

  getInfo() {
    return `Vuelo - ${this.#airline} ($${this.#price})`;
  }
}