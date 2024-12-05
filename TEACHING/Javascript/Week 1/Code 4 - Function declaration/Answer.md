# Answer:

1. 
```js
function two() {
    console.log(" Two ");
}
function one() {
    two();
    console.log(" One ");
}
```

2.
```js
function one() {
    return function() {
        console.log(" One ");
    }
}
const returnedFunction = one();
returnedFunction();
```