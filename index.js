// index.js
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
