export default class Booking {
  constructor(user, item) {
    this.user = user;
    this.item = item;
    this.date = new Date();
  }
}