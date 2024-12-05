Here are some **examples** of how to use the **`for...of`** loop in JavaScript:

### **1. Loop through an Array of Numbers**
```javascript
let numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num); // Prints each number in the array
}
```

### **Output:**
```
1
2
3
4
5
```

### **Explanation**:
- The `for...of` loop iterates through the values in the `numbers` array and prints each one.

---

### **2. Loop through an Array of Strings**
```javascript
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit); // Prints each fruit in the array
}
```

### **Output:**
```
apple
banana
cherry
```

### **Explanation**:
- The `for...of` loop iterates through the values in the `fruits` array and prints each one.

---

### **3. Sum of Elements in an Array**
```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let num of numbers) {
  sum += num; // Add each number to the sum
}

console.log("Sum:", sum);
```

### **Output:**
```
Sum: 15
```

### **Explanation**:
- The `for...of` loop iterates through the `numbers` array and calculates the sum of all elements.

---

### **4. Loop through a String**
```javascript
let word = "hello";

for (let char of word) {
  console.log(char); // Prints each character in the string
}
```

### **Output:**
```
h
e
l
l
o
```

### **Explanation**:
- The `for...of` loop iterates through each character of the string `word` and prints it.

---

### **5. Loop through an Array of Objects**
```javascript
let people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 35 }
];

for (let person of people) {
  console.log(person.name + " is " + person.age + " years old");
}
```

### **Output:**
```
John is 25 years old
Jane is 30 years old
Jim is 35 years old
```

### **Explanation**:
- The `for...of` loop iterates through the array of objects and prints the name and age of each person.

---

### **8. Iterate over an Array of Numbers and Find Even Numbers**
```javascript
let numbers = [10, 15, 20, 25, 30];

for (let num of numbers) {
  if (num % 2 === 0) {
    console.log(num + " is even");
  }
}
```

### **Output:**
```
10 is even
20 is even
30 is even
```

### **Explanation**:
- The `for...of` loop iterates through the array, and inside the loop, it checks if the number is even and prints it.

---

### **9. Create a New Array with Transformed Values**
```javascript
let numbers = [1, 2, 3, 4, 5];
let squares = [];

for (let num of numbers) {
  squares.push(num * num); // Push the square of each number into the new array
}

console.log(squares);
```

### **Output:**
```
[1, 4, 9, 16, 25]
```

### **Explanation**:
- The `for...of` loop iterates through each number in the array and adds its square to the `squares` array.

---

### **10. Using `for...of` with `Array.entries()`**
```javascript
let numbers = [10, 20, 30];

for (let [index, value] of numbers.entries()) {
  console.log(`Index: ${index}, Value: ${value}`);
}
```

### **Output:**
```
Index: 0, Value: 10
Index: 1, Value: 20
Index: 2, Value: 30
```

### **Explanation**:
- The `for...of` loop is used with `Array.entries()` to get both the index and the value of each element in the array.

---

### **Key Points**:
- The `for...of` loop is typically used when you need to loop through iterable objects like arrays, strings, sets, and maps.
- It gives you the **value** directly, unlike the `for...in` loop, which gives you the **key/index**.

Let me know if you'd like further explanations!