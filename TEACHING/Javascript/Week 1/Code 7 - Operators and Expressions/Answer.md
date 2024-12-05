Here are the answers to the exercises:

---

### **1. Double Equal (`==`)**
```javascript
console.log(5 == "5"); // true (type coercion: string "5" converted to number 5)
console.log(0 == false); // true (type coercion: false converted to 0)
console.log(null == undefined); // true (special rule: null and undefined are equal)
console.log(" " == 0); // true (type coercion: " " converted to 0)
console.log("10" == 10); // true (type coercion: string "10" converted to number 10)
```

---

### **2. Triple Equal (`===`)**
```javascript
console.log(5 === "5"); // false (no type coercion, different types)
console.log(0 === false); // false (no type coercion, different types)
console.log(null === undefined); // false (different types)
console.log(" " === 0); // false (different types)
console.log("10" === 10); // false (different types)
```

---

### **3. Conditional (Ternary) Operator (`? :`)**
```javascript
// Conditional rewrite
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Practice
const score = 75;
const grade = score > 50 ? "Pass" : "Fail";
console.log(grade); // "Pass"
```

---

### **4. Unary Operators**
```javascript
let x = 5;
console.log(+x); // 5 (unary plus, no change)
console.log(-x); // -5 (unary minus, negates value)
console.log(typeof x); // "number" (returns the type of the variable)
console.log(++x); // 6 (pre-increment: increments and then returns)
console.log(x--); // 6 (post-decrement: returns then decrements)
console.log(x); // 5 (value after decrement)
```

---

### **5. Comparison Operators**
```javascript
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(5 <= 10); // true
console.log(10 != "10"); // false (type coercion: both are treated as equal)
console.log(10 !== "10"); // true (strict inequality, different types)
```

---

### **6. Arithmetic Operators**
```javascript
let a = 15, b = 4;
console.log(a + b); // 19
console.log(a - b); // 11
console.log(a * b); // 60
console.log(a / b); // 3.75
console.log(a % b); // 3
console.log(a ** b); // 50625 (15 raised to the power of 4)
```

---

### **7. Bitwise Operators**
```javascript
let num1 = 5, num2 = 3; // Binary: num1 = 0101, num2 = 0011
console.log(num1 & num2); // 1 (0101 & 0011 = 0001)
console.log(num1 | num2); // 7 (0101 | 0011 = 0111)
console.log(num1 ^ num2); // 6 (0101 ^ 0011 = 0110)
console.log(~num1); // -6 (bitwise NOT: flips bits of 0101 to 1010, which is -6 in two's complement)
console.log(num1 << 1); // 10 (left shift: 0101 becomes 1010)
console.log(num1 >> 1); // 2 (right shift: 0101 becomes 0010)
```

---

### **8. Logical Operators**
```javascript
const a = true, b = false;
console.log(a && b); // false (true AND false is false)
console.log(a || b); // true (true OR false is true)
console.log(!a); // false (NOT true is false)
console.log(!b); // true (NOT false is true)
console.log((a || b) && !b); // true (true OR false is true, AND NOT false is true)
```

---

### **9. String Operators**
```javascript
const str1 = "Hello", str2 = "World";
console.log(str1 + " " + str2); // "Hello World"
console.log(str1.length); // 5 (number of characters in "Hello")
console.log(str2[2]); // "r" (character at index 2 in "World")

const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"
```

---

### **10. Short-Hand Operators**
```javascript
let z = 50;
z += 10; // z = z + 10
console.log(z); // 60
z -= 5; // z = z - 5
console.log(z); // 55
z *= 2; // z = z * 2
console.log(z); // 110
z /= 4; // z = z / 4
console.log(z); // 27.5
z %= 3; // z = z % 3
console.log(z); // 0.5
```

---
