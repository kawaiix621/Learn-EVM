# Learn EVM with JavaScript  
**Learn-EVM-with-JS** is an educational project designed to introduce web developers to the fundamental concepts of the Ethereum Virtual Machine (EVM) using JavaScript. This project bridges the gap between high-level smart contract development in Solidity and low-level EVM execution, providing a simplified, interactive environment for understanding how smart contracts are compiled, deployed, and executed on the Ethereum blockchain.

## Key Features
- **Hands-on Learning:** Explore the relationship between Solidity, EVM bytecode, and opcodes through practical examples and coding exercises.
- **Custom EVM Simulator:** Implement a virtual machine that can execute EVM bytecode, allowing users to experiment with their own smart contracts.
- **Step-by-Step Guides:** Detailed modules that break down complex concepts into manageable sections, making it easy for beginners to grasp.
- **Code Examples:** JavaScript implementations of compiling Solidity code, generating bytecode, and executing opcodes, enhancing the learning experience.
- **Documentation and Resources:** Comprehensive explanations of concepts, including the ABI, bytecode, and EVM opcodes, along with additional resources for further exploration.


Welcome to the **"Learn EVM with JavaScript"** repository! This course is designed for web developers who want to understand the core concepts behind the **Ethereum Virtual Machine (EVM)** by building a **simplified EVM using JavaScript**.

### 🧠 **Prerequisites**
- Basic knowledge of JavaScript  
- Familiarity with Node.js (e.g., installing packages with npm)  
- Optional: Some understanding of blockchain concepts


## Goal
This project aims to empower web developers with the knowledge and skills to understand and interact with the Ethereum blockchain, enabling them to create, deploy, and manage smart contracts effectively.

---

## 📚 **Course Parts(6) and Substack Posts**

Each module has a detailed explanation and code walkthrough on **substack**. Follow these posts to get the full context:  

1. **[Part 1: Stack-based Computation](https://open.substack.com/pub/tobiawolaju21/p/stack-based-computation?r=2hkadt&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true)**  
2. **[Part 2: Simple Memory Management](https://open.substack.com/pub/tobiawolaju21/p/simple-memory-management?r=2hkadt&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true)**  
3. **[Part 3: Persistent Storage](https://open.substack.com/pub/tobiawolaju21/p/persistent-storage-in-the-ethereum?r=2hkadt&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true)**  
4. **[Part 4: Instruction Decoding and Execution](https://open.substack.com/pub/tobiawolaju21/p/instruction-decoding-and-execution?r=2hkadt&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true)**  

5. **[Part 5: Gas Management (coming soon)](https://medium.com/)**  

6. **[Part 6: Building a JavaScript Virtual Machine(coming soon)](https://medium.com/)**  

---

## 🚀 **Getting Started**

### 1. Clone the Repository

```bash
git clone https://github.com/kawaiix621/learn-evm-with-js.git
cd learn-evm-with-js 
``` 

### 2. Install Dependencies
```bash
 npm install
```

### 3. Run the EVM
```bash
node index.js
```

### **💻 How the EVM Works (Simplified)**
- The Stack: Used for intermediate calculations.
- Memory: Temporary storage during execution.
- Persistent Storage: Stores data between executions.
- Instruction Set: Decodes and executes bytecode step-by-step.
- Gas Management: Ensures each operation has a cost, mimicking the behavior of the real EVM.

### **🛠 How to Use the EVM**
-You can modify the index.js file to execute your own bytecode. Here’s a simple example:

```bash
javascript
Copy code
const bytecode = [
  0x02, 10,   // PUSH 10
  0x02, 20,   // PUSH 20
  0x01,       // ADD
  0x02, 0,    // PUSH 0 (storage key)
  0x03        // STORE (store result at key 0)
];
```
-This bytecode will:

Push 10 and 20 to the stack.
Add them (result = 30).
Store the result at key 0 in storage.

# **🤝 Contributing**
- Feel free to fork this repository, submit pull requests, or suggest improvements via issues. Contributions are welcome!

# **📄 License**
- This project is licensed under the MIT License.


# follow the course in details to get the gist
