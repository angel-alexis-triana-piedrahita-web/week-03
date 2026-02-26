export default class TravelSystem {
  #items = [];
  #users = [];
  #transactions = [];

  static {
    this.VERSION = '1.0.0';
    this.MAX_ITEMS = 1000;
  }

  addItem(item) {
    this.#items.push(item);
  }

  removeItem(id) {
    this.#items = this.#items.filter(i => i.id !== id);
  }

  findItem(id) {
    return this.#items.find(i => i.id === id);
  }

  searchByName(query) {
    return this.#items.filter(i => i.name.toLowerCase().includes(query.toLowerCase()));
  }

  filterByType(type) {
    return type === 'All' ? this.#items : this.#items.filter(i => i.getType() === type);
  }

  getStats() {
    return {
      total: this.#items.length,
      active: this.#items.filter(i => i.isActive).length
    };
  }
}