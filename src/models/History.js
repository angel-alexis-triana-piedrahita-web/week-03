export default class History {
  constructor(action) {
    this.action = action;
    this.date = new Date();
  }
}