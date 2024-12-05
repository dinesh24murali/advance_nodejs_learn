Here are some **examples** to understand how the **`do...while`** loop works in JavaScript:

---

### **1. Basic Example - Print Numbers from 1 to 5**
```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
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
- The loop runs at least once, even if the condition is false. It prints numbers from 1 to 5, incrementing `i` after each print.

---

### **2. Guessing Game (Input from User)**
Write a program where the user has to guess a number between 1 and 10. The program keeps asking until the correct number is guessed. Assume the correct number is 7.
```javascript
let guess;
do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (guess !== 7);

console.log("Correct! You've guessed the number.");
```

### **Explanation**:
- The loop continues asking the user to guess a number until the correct number (7) is guessed.

---

### **3. Sum of Positive Numbers**
Write a program that keeps asking the user for a positive number and adds it to a total. The loop stops when the user enters a negative number.
```javascript
let total = 0;
let number;

do {
  number = parseInt(prompt("Enter a positive number:"));
  if (number >= 0) total += number;
} while (number >= 0);

console.log("The total sum is:", total);
```

### **Explanation**:
- The loop keeps asking for positive numbers and adds them to the `total`. It stops when the user enters a negative number.

---

### **4. Countdown Timer**
Write a program that uses a `do...while` loop to count down from 10 to 1.
```javascript
let count = 10;

do {
  console.log(count);
  count--;
} while (count > 0);
```

### **Output:**
```
10
9
8
7
6
5
4
3
2
1
```

### **Explanation**:
- The loop runs at least once, and it counts down from 10 to 1, decreasing `count` by 1 each time.

---

### **5. Print Multiplication Table for a Number**
Write a program that prints the multiplication table for a number entered by the user (e.g., 3). The program should print the multiplication table from 1 to 10.
```javascript
let num = parseInt(prompt("Enter a number:"));
let i = 1;

do {
  console.log(num + " x " + i + " = " + (num * i));
  i++;
} while (i <= 10);
```

### **Explanation**:
- The `do...while` loop prints the multiplication table for the entered number, from 1 to 10.

---

### **6. Calculate Factorial of a Number**
Write a program that uses a `do...while` loop to calculate the factorial of a number.
```javascript
let num = 5; // You can change this number
let factorial = 1;
let i = 1;

do {
  factorial *= i;
  i++;
} while (i <= num);

console.log("Factorial of " + num + " is " + factorial);
```

### **Output:**
```
Factorial of 5 is 120
```

### **Explanation**:
- The loop calculates the factorial by multiplying the current value of `factorial` with each integer from 1 to the given number.

---

### **7. Checking for Even Numbers**
Write a program that checks if a number entered by the user is even or odd. The program should keep asking for input until an even number is entered.
```javascript
let number;
do {
  number = parseInt(prompt("Enter a number:"));
} while (number % 2 !== 0);

console.log("You entered an even number:", number);
```

### **Explanation**:
- The loop keeps asking for a number until the user enters an even number. The condition checks if the number is even by using `number % 2 !== 0`.

---

### **8. Print All Even Numbers from 1 to 20**
Write a program that uses a `do...while` loop to print all even numbers from 1 to 20.
```javascript
let i = 2;

do {
  console.log(i);
  i += 2;
} while (i <= 20);
```

### **Output:**
```
2
4
6
8
10
12
14
16
18
20
```

### **Explanation**:
- The loop starts at 2 and increments by 2 each time, printing only even numbers until 20.

---

### **9. Display Prime Numbers from 1 to 50**
Write a program that prints all prime numbers between 1 and 50 using a `do...while` loop.
```javascript
let num = 2;

do {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) console.log(num);
  num++;
} while (num <= 50);
```

### **Output:**
```
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
```

### **Explanation**:
- The program checks if each number between 1 and 50 is prime by checking if it's divisible by any number other than 1 and itself.

---

### **10. User Input Validation**
Write a program that keeps asking the user for a valid age (between 18 and 100) using a `do...while` loop. The loop continues until a valid age is entered.
```javascript
let age;
do {
  age = parseInt(prompt("Enter your age (between 18 and 100):"));
} while (age < 18 || age > 100);

console.log("You entered a valid age:", age);
```

### **Explanation**:
- The program continues asking for input until the user enters a valid age between 18 and 100.

---

These exercises help you practice and understand how the **`do...while`** loop functions, particularly its ability to execute the block of code at least once before checking the condition. Let me know if you need any further clarification or solutions!