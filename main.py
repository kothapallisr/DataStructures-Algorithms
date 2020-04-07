print('Sri Satchidananda Sadguru Sainath Maharaj Ki Jai!')
print('Sadgur Sri Sainathuni Sarath Babuji Ki Jai!!')

a = [1,2,3]
b = a
if a is b:
    print(True)
if a == b:
    print(True)
c = list(a)
if a == c:
    print(True)

if a is c:
    print(True)
else:
    print(False)
# "is" expressions eveluate to True if both the variables point to the same object.
# "==" eveluates to True if the objects referred to by the  variables are equal.