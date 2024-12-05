Here are examples of different use cases for the `for` loop in JavaScript:

---

### **1. Basic `for` Loop**
```javascript
// Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

### **2. Iterating Through an Array**
```javascript
const fruits = ["apple", "banana", "cherry"];

// Print each fruit
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

### **3. Reverse Iteration**
```javascript
// Print numbers from 5 to 1
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
```

---

### **4. Nested `for` Loop**
```javascript
// Multiplication table
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
```

---

### **5. Skipping an Iteration with `continue`**
```javascript
// Print all numbers from 1 to 5 except 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

---

### **6. Breaking a Loop with `break`**
```javascript
// Stop the loop when the number is 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
```

---

### **7. Looping Over an Object's Keys and Values**
```javascript
const person = { name: "Alice", age: 25, city: "New York" };

// Using `for` with `Object.keys`
const keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
  console.log(`${keys[i]}: ${person[keys[i]]}`);
}
```

---

### **8. Modifying an Array During Iteration**
```javascript
let numbers = [1, 2, 3, 4, 5];

// Add 10 to each number
for (let i = 0; i < numbers.length; i++) {
  numbers[i] += 10;
}
console.log(numbers); // [11, 12, 13, 14, 15]
```

---

### **9. Infinite Loop with `break`**
```javascript
// Count until 3, then stop
let count = 1;
for (;;) {
  console.log(count);
  if (count === 3) break;
  count++;
}
```

---

### **10. Iterating Over a String**
```javascript
const str = "hello";

// Print each character
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```

---

These examples cover a variety of scenarios to help understand how `for` loops work and can be used effectively in JavaScript.