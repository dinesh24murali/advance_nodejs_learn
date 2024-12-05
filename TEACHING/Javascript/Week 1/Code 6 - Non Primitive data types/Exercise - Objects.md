Here are some exercises to practice working with **non-primitive data types** in JavaScript

---

### **Exercise 1: Working with Objects**
```javascript
const car = {
  make: "Tesla",
  model: "Model 3",
  year: 2023,
  features: ["Autopilot", "Electric"],
};

console.log(car.color); // What will this log?
car.color = "Red"; // Add a new property
console.log(car.color); // What will this log?
car.features.push("Sunroof"); // Add a new feature
console.log(car.features); // What will this log?
delete car.year; // Remove a property
console.log(car.year); // What will this log?
```

**Task:**  
1. Predict the output of each `console.log` statement.  
2. Modify the `car` object to include a `getDetails` method that returns a string with its make, model, and year.  
3. Discuss the immutability of objects and how to create a copy of the `car` object.

---

### **Exercise 2: Passing Objects to Functions**
```javascript
const person = { name: "Alice", age: 25 };
const updateAge = (obj, newAge) => {
  obj.age = newAge;
};

console.log(person.age); // What will this log?
updateAge(person, 30);
console.log(person.age); // What will this log?
```

**Task:**  
1. Predict the output of each `console.log` statement.  
2. Explain why updating objects inside a function reflects changes outside the function.  
3. Write a function `deepCopy` to create a deep copy of an object \.

---

### **Exercise 4: Comparing Non-Primitive Types**
```javascript
const obj1 = { name: "John" };
const obj2 = { name: "John" };
const obj3 = obj1;

console.log(obj1 === obj2); // What will this log?
console.log(obj1 === obj3); // What will this log?
```

**Task:**  
1. Predict the output of each `console.log` statement.  
2. Explain how object equality works in JavaScript.  
3. Demonstrate how to compare two objects for value equality instead of reference equality.

---

### **Exercise 5: Functions as First-Class Citizens**
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

### **Exercise 6: **

Implement linked list using Objects
