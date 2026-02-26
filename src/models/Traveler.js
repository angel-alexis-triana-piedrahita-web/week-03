import Person from './Person.js';
export default class Traveler extends Person {
  #passport;

  constructor(name, email, passport) {
    super(name, email);
    this.#passport = passport;
  }

  get passport() { return this.#passport; }

  bookTrip() {
    return 'Viaje reservado';
  }
}