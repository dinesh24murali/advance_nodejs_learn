# Global Variables
# Variables that are created outside of a function are known as global variables.
# Global variables can be used by everyone, both inside of functions and outside.

x = "awesome"

def myfunc():
  print("Python is " + x)

myfunc()



# If you create a variable with the same name inside a function, this variable will be local, 
# and can only be used inside the function. The global variable with the same name will remain 
# as it was, global and with the original value.

x1 = "awesome"

def myfunc1():
  x1 = "fantastic"
  print("Python is " + x1)

myfunc1()

print("Python is " + x1)

