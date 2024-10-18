/* index.js
const EVM = require("./instructions");

const bytecode = [
  0x02, 10,   // PUSH 10
  0x02, 20,   // PUSH 20
  0x01,       // ADD
  0x02, 0,    // PUSH 0 (storage key)
  0x03        // STORE (store result at key 0)
];

const evm = new EVM();
evm.execute(bytecode);
evm.printState();

*/

//update in lesson 3 to work with compiler
const fs = require('fs');

// Load bytecode from file
const bytecode = JSON.parse(fs.readFileSync('program.bytecode', 'utf-8'));

// Initialize stack, memory, and storage
const stack = [];
const memory = Array(20).fill(0);
const storage = {};

// Execute bytecode
let pc = 0;  // Program counter

while (pc < bytecode.length) {
  const opcode = bytecode[pc];

  switch (opcode) {
    case 0x02: // PUSH
      const value = bytecode[++pc];
      stack.push(value);
      break;

    case 0x01: // ADD
      const a = stack.pop();
      const b = stack.pop();
      stack.push(a + b);
      break;

    case 0x04: // SUB
      const x = stack.pop();
      const y = stack.pop();
      stack.push(x - y);
      break;

    case 0x03: // STORE
      const key = bytecode[++pc];
      const val = stack.pop();
      storage[key] = val;
      break;

    case 0x05: // LOAD
      const loadKey = bytecode[++pc];
      stack.push(storage[loadKey] || 0);
      break;

    case 0xff: // HALT
      console.log('Program halted.');
      pc = bytecode.length; // Exit the loop
      break;

    default:
      throw new Error(`Unknown opcode: ${opcode}`);
  }

  pc++;
}

// Display the final state
console.log('Stack:', stack);
console.log('Memory:', memory);
console.log('Storage:', storage);


