# Error object (Utilizing error objects)

When a runtime error occurs, a new Error object is created and thrown. With this Error object, we can determine the type of the Error and handle it according to its type.

### Types of Errors
Besides error constructors, Javascript also has other core Error constructors. Like

**AggregateError** - A collection of errors thrown simultaneously.
**EvalError** - An error occurred during the evaluation of a JavaScript expression.
**InternalError** - An internal JavaScript error, often indicating a bug in the engine.
**RangeError** - A value is outside the allowed range for a given operation.
**ReferenceError** - A variable or object is referenced before it’s declared or doesn’t exist.
**SyntaxError** - The code contains incorrect syntax, preventing it from being parsed.
Example:
```js
try {
  willGiveErrorSometime();
} catch (error) {
  if (error instanceof RangeError) {
    rangeErrorHandler(error);
  } else if (error instanceof ReferenceError) {
    referenceErrorHandle(error);
  } else {
    errorHandler(error);
  }
}
```

### Blog

- [Error Object - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [Control flow & Error handling - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [AggregateError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
- [EvalError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
- [InternalError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError)
- [RangeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
- [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
- [SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)