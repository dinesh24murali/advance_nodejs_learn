Here are the answers with explanations for the exercises:

---

### **Exercise 1: Block Scope Hoisting**
```javascript
{
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 10;
  const y = 20;
  console.log(y); // 20
}
console.log(typeof x); // undefined
```

**Explanation:**  
- `let` and `const` are hoisted but remain in a "temporal dead zone" (TDZ) from the start of the block until their declaration is reached. Accessing them before the declaration results in a `ReferenceError`.  
- `typeof x` outside the block returns `undefined` because `x` is not defined in the global scope.

---

### **Exercise 2: Function Scope Hoisting**
```javascript
function hoistingExample() {
  console.log(a); // undefined
  var a = 5;

  if (true) {
    console.log(b); // undefined
    var b = 10;
  }

  console.log(b); // 10
}
hoistingExample();
```

**Explanation:**  
- `var` declarations are hoisted to the top of the function scope and initialized with `undefined`. This is why `console.log(a)` logs `undefined` before the assignment.  
- `var b` is also hoisted to the top of the function scope (not just the `if` block), so `b` exists throughout the function scope but is initialized to `undefined` until its assignment.

---

### **Exercise 3: Global Scope Hoisting**
```javascript
console.log(a); // undefined
var a = 100;

function globalExample() {
  console.log(b); // undefined
  var b = 200;
}
globalExample();

console.log(typeof b); // undefined
```

**Explanation:**  
- `var a` is hoisted to the top of the global scope and initialized with `undefined`. So, `console.log(a)` logs `undefined` before the assignment.  
- Inside `globalExample`, `var b` is hoisted to the top of the function scope and initialized with `undefined`. It is not accessible outside the function, so `typeof b` logs `undefined` since `b` is not defined globally.