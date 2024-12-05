Here are some exercises to practice working with **non-primitive data types** in JavaScript.

---

### **Exercise 1: Working with Arrays**
```javascript
const numbers = [1, 2, 3, 4, 5];

console.log(numbers[5]); // What will this log?
numbers.push(6); // Add a new element
console.log(numbers); // What will this log?
numbers.pop(); // Remove the last element
console.log(numbers); // What will this log?
numbers.splice(2, 1); // Remove the element at index 2
console.log(numbers); // What will this log?
const squaredNumbers = numbers.map((n) => n * n); // Square each number
console.log(squaredNumbers); // What will this log?
```

**Task:**  
1. Predict the output of each `console.log` statement.  
2. Explain how `splice` and `map` work.  
3. Create a function `filterEvenNumbers` that takes an array and returns only even numbers.

---

### **Exercise 2: Passing Arrays to Functions**
```javascript

const numbers = [1, 2, 3];
const addNumber = (arr, num) => {
  arr.push(num);
};

console.log(numbers); // What will this log?
addNumber(numbers, 4);
console.log(numbers); // What will this log?
```

**Task:**  
1. Predict the output of each `console.log` statement.  
2. Explain why updating arrays inside a function reflects changes outside the function.  
3. Write a function `deepCopy` to create a deep copy of an array.

---

### **Exercise 3: Comparing Non-Primitive Types**
```javascript
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = array1;

console.log(array1 === array2); // What will this log?
console.log(array1 === array3); // What will this log?
```

**Task:**  
1. Predict the output of each `console.log` statement.  
2. Explain how array equality works in JavaScript.  
3. Demonstrate how to compare two arrays for value equality instead of reference equality.

---

### **Exercise 4: Functions as First-Class Citizens**
```javascript
const greet = (name) => `Hello, ${name}!`;

function executeFunction(fn, arg) {
  console.log(fn(arg)); // What will this log?
}

executeFunction(greet, "Alice");

const add = (a, b) => a + b;
const operate = (fn, x, y) => fn(x, y);
console.log(operate(add, 5, 3)); // What will this log?
```

**Task:**
1. Predict the output of each `console.log` statement.  
2. Explain what it means for functions to be "first-class citizens" in JavaScript.  
3. Write a function `compose` that takes two functions `f` and `g` and returns a new function that applies `f` to the result of `g`.

---

### **Exercise 5: **

Implement stack using array

### **Exercise 6: **

Implement queue using array
