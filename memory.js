// memory.js
class Memory {
    constructor() {
      this.memory = new Uint8Array(1024); // 1KB memory for simplicity
    }
  
    write(offset, value) {
      this.memory[offset] = value;
    }
  
    read(offset) {
      return this.memory[offset];
    }
  
    print() {
      console.log("Memory:", [...this.memory.slice(0, 20)]); // Print first 20 bytes
    }
  }
  
  module.exports = Memory;
  