import BaseItem from './BaseItem.js';
export default class Activity extends BaseItem {
  #category; #duration;

  constructor(name, location) {
    super(name, location);
    this.#category = 'Tour';
    this.#duration = 2;
  }

  get category() { return this.#category; }
  get duration() { return this.#duration; }

  getInfo() {
    return `Actividad ${this.#category} - ${this.#duration} horas`;
  }
}