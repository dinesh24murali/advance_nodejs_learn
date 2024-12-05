# Exercise:

Here are two exercises to practice JavaScript hoisting:

### Exercise 1: Predict the Output
```javascript
console.log(a); // What will this log?
var a = 10;

function test() {
  console.log(b); // What will this log?
  var b = 20;
  console.log(c); // What will this log?
}
test();
console.log(c); // What will this log?
```
**Task:** Predict the output of the code above and explain why each result occurs.

---

### Exercise 2: Function and Variable Hoisting
```javascript
hoistedFunction();
console.log(x); // What will this log?

function hoistedFunction() {
  console.log("I am hoisted!");
}

var x = 5;

anotherFunction();

var anotherFunction = function () {
  console.log("Will this be hoisted?");
};
```
**Task:** Identify which parts of the code demonstrate function and variable hoisting. Predict the output and explain your reasoning.