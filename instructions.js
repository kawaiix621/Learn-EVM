// instructions.js
const Stack = require("./stack");
const Memory = require("./memory");
const Storage = require("./storage");

class EVM {
  constructor() {
    this.stack = new Stack();
    this.memory = new Memory();
    this.storage = new Storage();
  }

  execute(bytecode) {
    let pc = 0; // Program counter

    while (pc < bytecode.length) {
      const opcode = bytecode[pc];

      switch (opcode) {
        case 0x01: // ADD
          const a = this.stack.pop();
          const b = this.stack.pop();
          this.stack.push(a + b);
          break;

        case 0x02: // PUSH
          pc++;
          const value = bytecode[pc];
          this.stack.push(value);
          break;

        case 0x03: // STORE
          const key = this.stack.pop();
          const val = this.stack.pop();
          this.storage.store(key, val);
          break;

        case 0x04: // LOAD
          const loadKey = this.stack.pop();
          this.stack.push(this.storage.load(loadKey));
          break;

        default:
          throw new Error(`Unknown opcode: ${opcode}`);
      }

      pc++;
    }
  }

  printState() {
    this.stack.print();
    this.memory.print();
    this.storage.print();
  }
}

module.exports = EVM;
