import Person from './Person.js';
export default class Admin extends Person {
  #level;

  constructor(name, email, level) {
    super(name, email);
    this.#level = level;
  }

  get level() { return this.#level; }

  manageSystem() {
    return 'Sistema administrado';
  }
}