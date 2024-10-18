# Learn EVM with JavaScript  

Welcome to the **"Learn EVM with JavaScript"** repository! This course is designed for web developers who want to understand the core concepts behind the **Ethereum Virtual Machine (EVM)** by building a **simplified EVM using JavaScript**.

### 🧠 **Prerequisites**
- Basic knowledge of JavaScript  
- Familiarity with Node.js (e.g., installing packages with npm)  
- Optional: Some understanding of blockchain concepts

---

## 📚 **Course Modules and Medium Posts**

Each module has a detailed explanation and code walkthrough on **Medium**. Follow these posts to get the full context:  

1. **[Module 1: Stack-based Computation](https://medium.com/@yourprofile/module-1-stack-based-computation)**  
2. **[Module 2: Simple Memory Management](https://medium.com/@yourprofile/module-2-memory-management)**  
3. **[Module 3: Persistent Storage](https://medium.com/@yourprofile/module-3-storage)**  
4. **[Module 4: Instruction Decoding and Execution](https://medium.com/@yourprofile/module-4-instruction-decoding)**  
5. **[Module 5: Gas Management](https://medium.com/@yourprofile/module-5-gas-management)**  
6. **[Module 6: Building a JavaScript Virtual Machine](https://medium.com/@yourprofile/module-6-building-a-javascript-vm)**  

---

## 🚀 **Getting Started**

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/learn-evm-with-js.git
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