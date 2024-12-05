# Exercise

Here are exercises covering **block**, **function**, and **global** scope with JavaScript hoisting:

---

### **Exercise 1: Block Scope Hoisting**  
```javascript
{
  console.log(x); // What will this log?
  let x = 10;
  const y = 20;
  console.log(y); // What will this log?
}
console.log(typeof x); // What will this log?
```

**Task:**  
1. Predict the output of the code.  
2. Explain how `let` and `const` behave in block scope with respect to hoisting.

---

### **Exercise 2: Function Scope Hoisting**  
```javascript
function hoistingExample() {
  console.log(a); // What will this log?
  var a = 5;

  if (true) {
    console.log(b); // What will this log?
    var b = 10;
  }

  console.log(b); // What will this log?
}
hoistingExample();
```

**Task:**  
1. Predict the output for each `console.log`.  
2. Explain how `var` is hoisted in function scope.

---

### **Exercise 3: Global Scope Hoisting**  
```javascript
console.log(a); // What will this log?
var a = 100;

function globalExample() {
  console.log(b); // What will this log?
  var b = 200;
}
globalExample();

console.log(typeof b); // What will this log?
```

**Task:**  
1. Predict the output of the code.  
2. Explain how `var` in global scope interacts with variables defined in a function.  
3. Discuss why `b` is or isn’t accessible globally.