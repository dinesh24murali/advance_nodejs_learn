Here are the answers with explanations for the exercises on JavaScript data types:

---

### **Exercise 1: Identify the Data Type**

```javascript
console.log(typeof 42);               // "number"
console.log(typeof "Hello, World!");  // "string"
console.log(typeof true);             // "boolean"
console.log(typeof undefined);        // "undefined"
console.log(typeof null);             // "object" (This is a known bug in JavaScript)
console.log(typeof Symbol("symbol")); // "symbol"
```

---

### **Exercise 2: Data Type Conversion**

```javascript
console.log(Number("42"));    // 42 (String converted to number)
console.log(String(100));     // "100" (Number converted to string)
console.log(Boolean(0));      // false (0 is falsy)
console.log(Boolean(""));     // false (Empty string is falsy)
console.log(Boolean("false"));// true (Non-empty strings are truthy)
console.log(Number(true));    // 1 (true converts to 1)
console.log(Number(false));   // 0 (false converts to 0)
```

**Explanation:**
- Non-empty strings like `"false"` are considered truthy because they are not empty.
- Boolean conversions depend on whether the value is "falsy" (`0`, `null`, `undefined`, `NaN`, `""`) or "truthy" (everything else).

---

### **Exercise 3: Comparing Data Types**

```javascript
console.log(42 == "42");        // true (Loose equality allows type coercion)
console.log(42 === "42");       // false (Strict equality checks type and value)
console.log(null == undefined); // true (Loose equality considers them equivalent)
console.log(null === undefined);// false (Strict equality checks type and value)
```

**Explanation:**
- `==` performs type coercion, converting values to the same type before comparison.
- `===` checks both value and type without coercion.

---
