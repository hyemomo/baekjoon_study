a= input()
b= input()
c= input()
d=0


if a!="Fizz" and a!="Buzz" and a!="FizzBuzz":
    d=int(a)+3
if b!="Fizz" and b!="Buzz" and b!="FizzBuzz":
    d=int(b)+2
if c!="Fizz" and c!="Buzz"and c!="FizzBuzz":
    d=int(c)+1

if d%3==0 and d%5==0:
    print("FizzBuzz")
elif d%3==0:
    print("Fizz")
elif d%5==0:
    print("Buzz")
else:
    print(d)