T= int(input())

for i in range(T):
    s= set()
    A,B= map(int, input().split())
    print(int(A**(1/2)))
    print(int(B**(1/2)))

    for j in range(1, int(A**(1/2))):
        if A%j==0:
            s.add(j)
    for j in range(2, int(B**(1/2))):
        if B%j ==0:
            s.add(j)
    
    print(s)