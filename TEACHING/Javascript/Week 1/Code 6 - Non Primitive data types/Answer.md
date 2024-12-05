Here are the answers with explanations for the exercises on **non-primitive data types** in JavaScript.

---

### **Exercise 1: Working with Objects**

```javascript
const car = {
  make: "Tesla",
  model: "Model 3",
  year: 2023,
  features: ["Autopilot", "Electric"],
};

console.log(car.color); // undefined
car.color = "Red"; 
console.log(car.color); // "Red"
car.features.push("Sunroof");
console.log(car.features); // ["Autopilot", "Electric", "Sunroof"]
delete car.year; 
console.log(car.year); // undefined
```

**Explanation:**
1. Accessing a property (`car.color`) that doesn’t exist returns `undefined`.
2. Adding a property dynamically (`car.color = "Red"`) makes it accessible.
3. Arrays in objects can be modified (e.g., `push`), which directly updates the reference.
4. Using `delete` removes a property from the object.

**Modified `car` object:**
```javascript
car.getDetails = function () {
  return `${this.make} ${this.model} (${this.year || "Year not available"})`;
};
console.log(car.getDetails());
```

---

### **Exercise 2: Working with Arrays**

```javascript
const numbers = [1, 2, 3, 4, 5];

console.log(numbers[5]); // undefined (index out of bounds)
numbers.push(6); 
console.log(numbers); // [1, 2, 3, 4, 5, 6]
numbers.pop(); 
console.log(numbers); // [1, 2, 3, 4, 5]
numbers.splice(2, 1); 
console.log(numbers); // [1, 2, 4, 5]
const squaredNumbers = numbers.map((n) => n * n); 
console.log(squaredNumbers); // [1, 4, 16, 25]
```

**Explanation:**
- Accessing an out-of-bounds index returns `undefined`.
- `push` and `pop` modify the array by adding or removing the last element.
- `splice` modifies the array by removing an element at a specific index.
- `map` creates a new array with results from applying the callback function.

**Function to filter even numbers:**
```javascript
function filterEvenNumbers(arr) {
  return arr.filter((n) => n % 2 === 0);
}
console.log(filterEvenNumbers(numbers)); // [2, 4]
```

---

### **Exercise 3: Passing Objects and Arrays to Functions**

```javascript
const person = { name: "Alice", age: 25 };
const updateAge = (obj, newAge) => {
  obj.age = newAge;
};

console.log(person.age); // 25
updateAge(person, 30);
console.log(person.age); // 30

const numbers = [1, 2, 3];
const addNumber = (arr, num) => {
  arr.push(num);
};

console.log(numbers); // [1, 2, 3]
addNumber(numbers, 4);
console.log(numbers); // [1, 2, 3, 4]
```

**Explanation:**
- Objects and arrays are passed by reference, so changes within the function reflect outside the function.
- Primitive values like numbers are immutable, but reference types are mutable.

**Function to create a deep copy:**
```javascript
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

---

### **Exercise 4: Comparing Non-Primitive Types**

```javascript
const obj1 = { name: "John" };
const obj2 = { name: "John" };
const obj3 = obj1;

console.log(obj1 === obj2); // false (different references)
console.log(obj1 === obj3); // true (same reference)

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = array1;

console.log(array1 === array2); // false (different references)
console.log(array1 === array3); // true (same reference)
```

**Explanation:**
- Objects and arrays are compared by reference, not by value.
- Even if the content is identical, separate objects/arrays are not equal unless they share the same reference.

**Function to compare objects/arrays by value:**
```javascript
function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(array1, array2)); // true
```

---

### **Exercise 5: Functions as First-Class Citizens**

```javascript
const greet = (name) => `Hello, ${name}!`;

function executeFunction(fn, arg) {
  console.log(fn(arg)); // Hello, Alice!
}

executeFunction(greet, "Alice");

const add = (a, b) => a + b;
const operate = (fn, x, y) => fn(x, y);
console.log(operate(add, 5, 3)); // 8
```

**Explanation:**
- Functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

**Compose function:**
```javascript
function compose(f, g) {
  return (x) => f(g(x));
}

const square = (x) => x * x;
const double = (x) => x * 2;

const squareThenDouble = compose(double, square);
console.log(squareThenDouble(3)); // 18
```

Let me know if you have any questions or need further clarification!