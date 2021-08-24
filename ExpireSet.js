class ExpireSet {
  #values;
  #expires;

  constructor(values, expires = 60 * 60 * 24 * 30) {
    this.#expires = {};
    this.#values = new Set();
    values.forEach((value) => this.add(value, expires));
  }

  get size() {
    return this.#values.size;
  }

  add(key, expires = 60 * 60 * 24 * 30) {
    setTimeout(() => this.delete(key), expires * 1000);
    this.#values.add(key);
    return {
      onExpire: (func) => {
        this.#expires[key] = func;
      },
    };
  }
  has(key) {
    return this.#values.has(key);
  }
  delete(key) {
    if (this.#expires[key]) {
      this.#expires[key]();
    }
    return this.#values.delete(key);
  }
}
