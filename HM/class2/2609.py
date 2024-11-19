a,b= map(int,input().split())
#언제나 a가 b보다 크도록 설정
if a<b:
    a,b= b,a
    
    
#최대공약수
def gcb(x,y): 
    while y!=0:
        x,y= y,x%y
    return x
    



print(gcb(a,b))
#최소공배수
print(a*b//gcb(a,b))




