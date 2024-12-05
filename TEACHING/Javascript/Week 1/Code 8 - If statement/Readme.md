# If statement

Here are several examples of how to use `if` statements in JavaScript:

---

### **1. Basic `if` Statement**
```javascript
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}
// Output: You are an adult.
```

---

### **2. `if...else` Statement**
```javascript
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// Output: You are a minor.
```

---

### **3. `if...else if...else` Statement**
```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// Output: Grade: B
```

---

### **4. Multiple Conditions Using Logical Operators**
```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You are eligible to drive.");
} else {
  console.log("You are not eligible to drive.");
}
// Output: You are eligible to drive.
```

---

### **5. Nested `if` Statements**
```javascript
let user = { isLoggedIn: true, isAdmin: true };

if (user.isLoggedIn) {
  if (user.isAdmin) {
    console.log("Welcome, Admin!");
  } else {
    console.log("Welcome, User!");
  }
} else {
  console.log("Please log in.");
}
// Output: Welcome, Admin!
```

---

### **6. Checking a Value Using `typeof`**
```javascript
let value = "hello";

if (typeof value === "string") {
  console.log("The value is a string.");
}
// Output: The value is a string.
```

---

### **7. Using `if` with Ternary Operator for Short Syntax**
```javascript
let number = 10;

if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// Short-hand using a ternary operator
console.log(number % 2 === 0 ? "Even number" : "Odd number");
// Output: Even number
```

---

### **8. Checking for Empty or Falsy Values**
```javascript
let name = "";

if (!name) {
  console.log("Name cannot be empty.");
}
// Output: Name cannot be empty.
```

---

These examples demonstrate various ways to use `if` statements to handle different conditions. Let me know if you'd like additional examples or further explanation!