// stack.js
class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(value) {
      this.stack.push(value);
    }
  
    pop() {
      if (this.stack.length === 0) throw new Error("Stack underflow");
      return this.stack.pop();
    }
  
    peek() {
      return this.stack[this.stack.length - 1];
    }
  
    print() {
      console.log("Stack:", this.stack);
    }
  }
  
  module.exports = Stack;
  