# Type casting

Type casting refers to the process of converting a value from one data type to another. JavaScript supports two types of type casting:

1. **Implicit Type Casting (Type Coercion):**  
   JavaScript automatically converts a value to a different type when required.
2. **Explicit Type Casting (Type Conversion):**  
   The programmer manually converts a value from one type to another.

---

### **Implicit Type Casting (Type Coercion)**  
JavaScript performs type coercion when combining different types of values.  

#### Example:
```javascript
console.log(5 + "10"); // "510" (number is coerced to a string)
console.log("5" * 2);  // 10 (string is coerced to a number)
console.log(true + 1); // 2 (true is coerced to 1)
console.log(false + " is false"); // "false is false"
```

#### Explanation:
- When a number is added to a string, the number is converted to a string, and the two strings are concatenated.
- When using operators like `*` or `/`, JavaScript tries to convert strings to numbers.

---

### **Explicit Type Casting (Type Conversion)**  

#### **Converting to String**
Use the `String()` function or `.toString()` method.  
```javascript
const num = 123;
console.log(String(num)); // "123"
console.log(num.toString()); // "123"
```

#### **Converting to Number**
Use the `Number()` function or `parseInt`/`parseFloat`.  
```javascript
const str = "456";
console.log(Number(str)); // 456
console.log(parseInt("123abc")); // 123 (parses up to the first non-digit character)
console.log(parseFloat("123.45abc")); // 123.45
console.log(Number("abc")); // NaN (not a number)
```

#### **Converting to Boolean**
Use the `Boolean()` function.  
```javascript
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(undefined)); // false
```

---

### **Common Pitfalls of Type Casting**  

#### Pitfall 1: Adding Numbers and Strings
```javascript
console.log(5 + "5"); // "55" (number converted to string)
console.log(5 - "5"); // 0 (string converted to number)
```

#### Pitfall 2: Truthy and Falsy Values
JavaScript considers some values "truthy" (evaluate to `true`) and others "falsy" (evaluate to `false`).

**Falsy values:**
- `false`, `0`, `""`, `null`, `undefined`, `NaN`

**Example:**
```javascript
if ("") {
  console.log("This won't run");
} else {
  console.log("Falsy string"); // Output: Falsy string
}
```

---

### **Practical Example of Type Casting**
#### Input from a User (String to Number)
```javascript
const input = prompt("Enter a number:"); // Always returns a string
const number = Number(input);

if (!isNaN(number)) {
  console.log(`The number is ${number}`);
} else {
  console.log("That's not a valid number!");
}
```

#### Converting Data Types in Arrays
```javascript
const mixedArray = [1, "2", true, "hello"];
const stringArray = mixedArray.map(String); // Convert all to strings
console.log(stringArray); // ["1", "2", "true", "hello"]
```
