// evm_with_gas.js
class EVMWithGas extends EVM {
    constructor() {
      super();
      this.gas = 10000; // Start with 10,000 gas units
    }
  
    execute(bytecode) {
      let pc = 0;
  
      while (pc < bytecode.length) {
        if (this.gas <= 0) throw new Error("Out of gas!");
  
        const opcode = bytecode[pc];
  
        switch (opcode) {
          case 0x01: // ADD
            this.gas -= 3; // Example: ADD costs 3 gas
            const a = this.stack.pop();
            const b = this.stack.pop();
            this.stack.push(a + b);
            break;
  
          case 0x02: // PUSH
            this.gas -= 2; // PUSH costs 2 gas
            pc++;
            const value = bytecode[pc];
            this.stack.push(value);
            break;
  
          // Other operations...
  
          default:
            throw new Error(`Unknown opcode: ${opcode}`);
        }
  
        pc++;
      }
    }
  }
  