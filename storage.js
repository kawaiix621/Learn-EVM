// storage.js
class Storage {
    constructor() {
      this.storage = {};
    }
  
    store(key, value) {
      this.storage[key] = value;
    }
  
    load(key) {
      return this.storage[key] || 0;
    }
  
    print() {
      console.log("Storage:", this.storage);
    }
  }
  
  module.exports = Storage;
