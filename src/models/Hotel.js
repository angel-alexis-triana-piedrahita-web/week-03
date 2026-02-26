import BaseItem from './BaseItem.js';
export default class Hotel extends BaseItem {
  #stars; #nights;

  constructor(name, location) {
    super(name, location);
    this.#stars = 4;
    this.#nights = 3;
  }

  get stars() { return this.#stars; }
  get nights() { return this.#nights; }

  getInfo() {
    return `Hotel ${this.#stars} estrellas - ${this.#nights} noches`;
  }
}