class MyClass:
  x = 5


p1 = MyClass()
print(p1.x)


class Person:
  __count = 0
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def __str__(self):
    return f"{self.name}({self.age})"

  def myfunc(self):
    print("Hello my name is " + self.name)

class Ceo(Person):
    def lead(self):
        print(" Dog barks ", self._Person__count)

p2 = Ceo("Jim", 34)
p3 = Person("Jim", 34)
p2.lead()
print(p3.)
