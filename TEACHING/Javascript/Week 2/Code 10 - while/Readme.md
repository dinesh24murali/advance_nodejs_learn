# While loop

Here’s a simple example of a **`while` loop** in JavaScript:

### Example: Print Numbers from 1 to 5
```javascript
let number = 1;

while (number <= 5) {
  console.log(number); // Print the current number
  number++;            // Increment the number
}
```

### Output:
```
1
2
3
4
5
```

### Explanation:
1. **Initialization**: The variable `number` is initialized to `1`.
2. **Condition**: The loop checks if `number <= 5`. If true, the loop runs.
3. **Action**: Inside the loop, `number` is printed and then incremented by `1` using `number++`.
4. **Termination**: The loop stops when `number` becomes `6`, as the condition `number <= 5` is no longer true.