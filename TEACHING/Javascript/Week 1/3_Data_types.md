# Data types

### Blogs

- [JavaScript Data Types - CodeGuage](https://www.codeguage.com/courses/js/data-types)
- [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)
- [JavaScript Data Types](https://javascript.info/types)
- [Explore top posts about JavaScript](https://app.daily.dev/tags/javascript)

## String:

### Blogs:

- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JavaScript Strings](https://javascript.info/string)

## Undefined

### Video

- [undefined](https://www.youtube.com/watch?v=B7iF6G3EyIk&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=8)

## Number

The Number data type in JavaScript represents floating-point numbers, such as 37 or -9.25. The Number constructor provides constants and methods to work with numbers, and values of other types can be converted to numbers using the Number() function.

```js
let num1 = 255; // integer
let num2 = 255.0; // floating-point number with no fractional part
let num3 = 0xff; // hexadecimal notation
let num4 = 0b11111111; // binary notation
let num5 = 0.255e3; // exponential notation

console.log(num1 === num2); // true
console.log(num1 === num3); // true
console.log(num1 === num4); // true
console.log(num1 === num5); // true
```

In this example:

- 255 and 255.0 are equivalent, as JavaScript treats both as the same number.
- 0xff represents 255 in hexadecimal notation.
- 0b11111111 represents 255 in binary notation.
- 0.255e3 is 255 in exponential notation.
- All these different representations are equal to 255 in JavaScript.

## BigInt

BigInt is a built-in JavaScript object that allows you to work with integers of arbitrary size.

Unlike the Number type, which can accurately represent integers only within the range of ±2^53 , BigInt can handle integers far beyond this limit. This makes it particularly useful for applications requiring high precision with very large numbers, such as cryptography or scientific computations.

### Blog

- [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

### Video

- [The Whys and Hows Of BigInt](https://youtu.be/6I650PQfhMg?si=XyVGrmp4KWLRcHVj)

## Boolean

### Blog

- [JavaScript Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### Video

- [Booleans in JavaScript](https://www.youtube.com/watch?v=B4ZCFdrBmbE)

## Null

The null value in JavaScript signifies the deliberate absence of any object value. It is considered as one of JavaScript’s primitive values and a falsy value.

Deliberate absence emphasizes the intentional use of null to indicate that a variable does not point to any object. This explicit declaration conveys the purposeful nature of null, showing that the variable is meant to be empty or non-existent at execution time.

In essence, null is a way to reset a variable, signalling that it should not reference any object.

### Blog

- [What is null in JavaScript](https://www.altcademy.com/blog/what-is-null-in-javascript/)
- [null in JavaScript](https://masteringjs.io/tutorials/fundamentals/null)
