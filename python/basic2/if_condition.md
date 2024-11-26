
## Basic if
if 5 > 2:
    print("Five is greater than two!")



## Basic Inline if without else

```py
# Program to demonstrate conditional operator
a, b = 10, 20
 
# Copy value of a in min if a < b else copy b
if a < b: print (b, "Is Greater")
```

## Basic Inline Using If -Else
In this example, if x is even, the variable message will be assigned the string “Even,” and if x is odd, it will be assigned the string "Odd."
```py
x = 10
message = "Even" if x % 2 == 0 else "Odd"
print(message)
```

## Using Inline If with nested

In this example, we use nested inline if statements to determine the relationship between the values of x and y.
```py
x = 10
y = 5

result = "x is even and y is odd" if x % 2 == 0 else "x is odd and y is even" if y % 2 == 0 else "both x and y are odd"
print(result)
```
The output will be `x is even and y is odd` as the first condition `x % 2 == 0` becomes true. If `x` is an odd number it will go to else and check the second condition  `y % 2 == 0`. If the 2nd condition is true it will return `x is odd and y is even`.

## Using Inline If in List Comprehensions
In this example, we use inline if within a list comprehension to include only even numbers in the list of squares.
```py
n = 10
squares = [x ** 2 for x in range(1, n + 1) if x % 2 == 0]
print(squares)
```
Here `x ** 2` means a number to the power of another number. This is equal to `x * x`, also know as `x square`.
- `x ** 2` is the body of the if condition, if it becomes true it will run this.
- `for x in range(1, n + 1)` will loop from 1 to 11
- For ever loop (for ever value of x) the condition `x % 2` is executed
- When the condition becomes true the value is doubled and initialized in the array. This entire expression is surrounded by square brackets.