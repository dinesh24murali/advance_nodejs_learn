# Slicing

You can return a range of characters by using the slice syntax.

```py
b = "Hello, World!"
print(b[2:5])
```
result:
```py
'llo'
```

## Slice From the Start

```py
b = "Hello, World!"
print(b[:5])
```

## Slice to end

```py
b = "Hello, World!"
print(b[2:])
```

## Negative Indexing

```py
b = "Hello, World!"
print(b[-5:-2])
```

## String Concatenation

```py
a = "Hello"
b = "World"
c = a + b
print(c)
```

## String Format

As we learned in the Python Variables chapter, we cannot combine strings and numbers like this:
```py
age = 36
# Won't work
txt = "My name is John, I am " + age
print(txt)
```

## F-Strings

```py
age = 36
txt = f"My name is John, I am {age}"
print(txt)
```
- Display the price with 2 decimals:
```py
price = 59
txt = f"The price is {price:.2f} dollars"
print(txt)
```

## Escape Character

To insert characters that are illegal in a string, use an escape character.

An escape character is a backslash \ followed by the character you want to insert.

An example of an illegal character is a double quote inside a string that is surrounded by double quotes.

The escape character allows you to use double quotes when you normally would not be allowed:

```py
txt = "We are the so-called \"Vikings\" from the north."
```
