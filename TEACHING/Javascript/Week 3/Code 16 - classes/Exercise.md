# Class

Here are some **JavaScript class-related exercises** to help you practice:

---

### **1. Creating a Basic Class**
**Task:** Create a class `Person` with the following properties and methods:
- **Properties:** `name`, `age`
- **Method:** `greet()` that prints `"Hello, my name is [name] and I am [age] years old."`
- Create an object of `Person` and call the `greet()` method.

---

### **2. Class with Constructor**
**Task:** Create a class `Rectangle` with:
- **Properties:** `width`, `height`
- A constructor that initializes the width and height.
- A method `area()` that returns the area of the rectangle.
- Create a rectangle object with width `10` and height `5`, then print its area.

---

### **3. Inheritance**
**Task:** Create a base class `Animal` with:
- A method `speak()` that logs `"This animal makes a sound."`
- Create a subclass `Dog` that overrides the `speak()` method to log `"The dog barks."`
- Create objects of both `Animal` and `Dog`, and call their `speak()` methods.

---

### **4. Static Methods**
**Task:** Create a class `MathOperations` with:
- A static method `add(a, b)` that returns the sum of two numbers.
- A static method `subtract(a, b)` that returns the difference between two numbers.
- Call both methods without creating an object of the class.

---

### **5. Getters and Setters**
**Task:** Create a class `Circle` with:
- A private property `#radius`.
- A getter method `radius` to access the radius.
- A setter method `radius` to set a new radius (only if the value is positive).
- A method `area()` to calculate and return the area of the circle.
- Create an object, set the radius to 7, and print the area.

---

### **6. Class Method with Parameters**
**Task:** Create a class `Car` with:
- **Properties:** `make`, `model`, `year`
- A method `getDescription()` that returns a string: `"This is a [year] [make] [model]."`
- Create a `Car` object with the make `"Toyota"`, model `"Corolla"`, and year `2020`. Call `getDescription()`.

---

### **7. Class with Multiple Objects**
**Task:** Create a class `BankAccount` with:
- **Properties:** `accountHolder`, `balance`
- A method `deposit(amount)` to increase the balance.
- A method `withdraw(amount)` to decrease the balance (only if sufficient funds exist).
- Create two objects for `BankAccount` and perform deposits and withdrawals.

---

### **8. Polymorphism**
**Task:** Create a base class `Shape` with a method `calculateArea()` that returns `0`.
- Create two subclasses:
  - `Square` with a `side` property and an overridden `calculateArea()` method to calculate the area of a square.
  - `Circle` with a `radius` property and an overridden `calculateArea()` method to calculate the area of a circle.
- Create objects for `Square` and `Circle` and print their areas.

---

### **9. Using `super` Keyword**
**Task:** Create a base class `Employee` with:
- Properties: `name`, `salary`
- A method `details()` that prints `"Employee: [name], Salary: [salary]"`

Create a subclass `Manager` that:
- Adds a new property `department`
- Overrides the `details()` method to include the department in the output.
- Use the `super` keyword to call the base class method.

---

### **10. Class with Default Parameters**
**Task:** Create a class `Product` with:
- **Properties:** `name`, `price`, `discount` (default value `10%`)
- A method `getFinalPrice()` that calculates the price after the discount.
- Create a product object with name `"Laptop"` and price `50000`. Print the final price.

---

### **11. Private Methods**
**Task:** Create a class `PasswordManager` with:
- A private method `#encrypt(password)` that returns the password in reverse.
- A public method `savePassword(password)` that logs `"Password saved: [encrypted password]"`.
- Test the `savePassword` method.

---

### **12. Chaining Methods**
**Task:** Create a class `Calculator` with:
- A property `value` initialized to `0`.
- Methods:
  - `add(number)`
  - `subtract(number)`
  - `multiply(number)`
  - `divide(number)`
  - Each method updates `value` and returns the class instance for chaining.
- Use method chaining to perform operations like `calculator.add(10).subtract(5).multiply(3).divide(2)`.

---

### **13. Error Handling in Classes**
**Task:** Create a class `SafeDivision` with:
- A method `divide(a, b)` that returns the division result.
- Throw an error if `b` is `0` with a message `"Cannot divide by zero."`
- Catch and handle the error gracefully when calling `divide()`.

---

### **14. Adding Methods Dynamically**
**Task:** Create a class `DynamicMethods` with no initial methods.
- Dynamically add a method `sayHello()` to its prototype that logs `"Hello from DynamicMethods!"`.
- Create an object of the class and call `sayHello()`.

---

### **15. Using `instanceof`**
**Task:** Create a class `Book` and a subclass `EBook`.
- Create objects for both.
- Write a function that takes an object and checks if it is an instance of `Book` or `EBook` using the `instanceof` operator.

---

Let me know if you need answers or further clarification for any of these problems!