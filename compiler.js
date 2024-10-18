const fs = require('fs');

// Opcodes mapping
const OPCODES = {
  PUSH: 0x02,
  ADD: 0x01,
  SUB: 0x04,
  STORE: 0x03,
  LOAD: 0x05,
  HALT: 0xff,
};

// Compiler function to convert EVM code to bytecode
function compile(source) {
  const bytecode = [];

  // Split source into lines and process each instruction
  const lines = source.split('\n').map(line => line.trim()).filter(Boolean);

  lines.forEach(line => {
    const [instruction, arg] = line.split(' ');

    if (!(instruction in OPCODES)) {
      throw new Error(`Invalid instruction: ${instruction}`);
    }

    // Add opcode to bytecode
    bytecode.push(OPCODES[instruction]);

    // If the instruction takes an argument (like PUSH or STORE), add it
    if (arg !== undefined) {
      bytecode.push(parseInt(arg, 10));
    }
  });

  return bytecode;
}

// Read the source file and compile it to bytecode
const sourceCode = fs.readFileSync('program.evm', 'utf-8');
const bytecode = compile(sourceCode);

// Save the bytecode to a file
fs.writeFileSync('program.bytecode', JSON.stringify(bytecode));
console.log('Compiled bytecode:', bytecode);
