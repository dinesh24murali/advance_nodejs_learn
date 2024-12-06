# Throw

Here are some **problems** to practice the use of the **`throw`** keyword in JavaScript:

---

### **1. Throw an Error for Invalid Input**
Write a function `divideNumbers(a, b)` that divides two numbers. If the second number (`b`) is 0, throw an error with the message **"Cannot divide by zero."**.

---

### **2. Throw an Error for Invalid Age**
Write a function `checkAge(age)` that throws an error with the message **"Age cannot be negative."** if the age is less than 0. Otherwise, return **"Valid age."**.

---

### **3. Throw an Error for Missing Property**
Write a function `getUserName(user)` that accepts an object `user`. If the object does not contain a `name` property, throw an error with the message **"Missing name property."**.

---

### **4. Throw an Error for Non-Number Inputs**
Write a function `addNumbers(a, b)` that adds two numbers. If either `a` or `b` is not a number, throw an error with the message **"Inputs must be numbers."**.

---

### **5. Throw an Error for Invalid Array Length**
Write a function `checkArray(arr)` that throws an error if the given array has less than 3 elements with the message **"Array is too short."**.

---

### **6. Throw an Error in a Promise**
Create a promise that rejects with an error message **"Operation failed."** if a condition is not met. For example, reject if a given number is greater than 100.

---

### **7. Throw an Error in a Try-Catch Block**
Write a function `processData(data)` that throws an error if `data` is `null` or `undefined` with the message **"Invalid data."**. Wrap the function call in a `try-catch` block and print the error message if an exception occurs.

---

### **8. Throw an Error for Invalid Password**
Write a function `validatePassword(password)` that throws an error with the message **"Password too short."** if the password length is less than 8 characters. Otherwise, return **"Password is valid."**.

---

### **9. Throw Custom Error Object**
Create a function `login(username, password)` that throws a custom error object with properties `message: "Invalid login"` and `code: 401` if either username or password is missing.

---

### **10. Throw Error for Non-Unique Values**
Write a function `checkUnique(arr)` that throws an error with the message **"Duplicate values found."** if the array contains duplicate values.

---

### **11. Throw Error for Invalid JSON**
Write a function `parseJSON(jsonString)` that attempts to parse a JSON string. If parsing fails, catch the exception and throw a new error with the message **"Invalid JSON string."**.

---

### **12. Throw Error Based on Object Keys**
Write a function `validateObject(obj)` that throws an error with the message **"Object must contain 'id' and 'name' properties."** if either `id` or `name` keys are missing from the object.

---

### **13. Nested Try-Catch with Throw**
Write a function `fetchData(data)` that throws an error if `data` is undefined. Use a `try-catch` block to catch the error and throw a new error with the message **"Failed to fetch data."**

---

### **14. Throw Error for Date Validation**
Write a function `validateDate(dateString)` that throws an error with the message **"Invalid date format."** if the input is not a valid date string.

---

### **15. Throw Error for Unexpected Type**
Write a function `validateType(input)` that throws an error with the message **"Unexpected type."** if the type of input is not a string.

---

These problems help you understand how to use the **`throw`** keyword to handle custom errors and exceptions effectively in JavaScript. Let me know if you'd like solutions to any of these!