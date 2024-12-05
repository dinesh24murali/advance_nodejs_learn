Here are examples for **`break`** and **`continue`** in JavaScript:

---

### **1. Example for `break`**
The `break` statement is used to exit a loop prematurely, even if the loop condition hasn't been satisfied.

#### **Problem:** Print numbers from 1 to 10 but stop the loop when the number reaches 6.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break; // Exits the loop when i is 6
  }
  console.log(i);
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

### **Explanation:**
- The loop runs from 1 to 10, but the `break` statement exits the loop when `i` equals 6.

---

### **2. Example for `continue`**
The `continue` statement skips the current iteration of a loop and moves to the next iteration.

#### **Problem:** Print all numbers from 1 to 10 except for the number 5.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // Skips the current iteration when i is 5
  }
  console.log(i);
}
```

### **Output:**
```
1
2
3
4
6
7
8
9
10
```

### **Explanation:**
- The loop runs from 1 to 10, but the `continue` statement skips the iteration when `i` equals 5, so the number 5 is not printed.

---

### **3. Example for `break` in a `while` loop**
#### **Problem:** Find the first number that is divisible by both 3 and 5 between 1 and 100.

```javascript
let i = 1;

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("First number divisible by both 3 and 5 is:", i);
    break; // Exits the loop after finding the number
  }
  i++;
}
```

### **Output:**
```
First number divisible by both 3 and 5 is: 15
```

### **Explanation:**
- The loop iterates through numbers from 1 to 100. When it finds the first number divisible by both 3 and 5, it prints the number and breaks out of the loop.

---

### **4. Example for `continue` in a `while` loop**
#### **Problem:** Print all numbers from 1 to 10 except for even numbers.

```javascript
let i = 1;

while (i <= 10) {
  if (i % 2 === 0) {
    i++; // Skip even numbers
    continue; // Skips the current iteration and moves to the next number
  }
  console.log(i);
  i++;
}
```

### **Output:**
```
1
3
5
7
9
```

### **Explanation:**
- The loop runs through numbers from 1 to 10, but `continue` is used to skip the even numbers, printing only the odd numbers.

---

These examples should help you understand how **`break`** and **`continue`** work within loops in JavaScript. The `break` statement is used to terminate the loop immediately, while `continue` is used to skip the current iteration and continue with the next one.