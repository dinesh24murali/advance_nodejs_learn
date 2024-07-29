# How to run?

Step 1:

Make sure there is at least one `debugger` in the code.

Step 2:

Use the following command to run the js file in inspect mode. The env variable `NODE_INSPECT_RESUME_ON_START=1` will make the inspector to stop execution on the 1st debugger.
```
NODE_INSPECT_RESUME_ON_START=1 node inspect index.js
```

Step 3:

Once you are at the debugger you can use the following commands when the execution is paused at the debugger.

1. `exec` is used to execute a command

Example:
`exec('a')` to print the value of variable `a`
`exec('sum(a,b)');` to call a function called `sum()` with arguments `a`, `b`.

2. `cont` is used to continue to next `debugger;`

3. `next` is used to go to the next line

