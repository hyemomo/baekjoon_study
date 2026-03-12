let input = 100;

function fiboRecursion(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fiboRecursion(n - 1) + fiboRecursion(n - 2);
}

// Main execution
input = 20; // Using 20 instead of 100 for reasonable execution time
console.log(fiboRecursion(input)); // 6765

// 이렇게 구현했을 때의 문제점
//fibo(3) = fibo(1) + fibo(2)
//fibo(4) = fibo(3) + fibo(2)
// fibo(5)= fibo(4) + fibo(3)

//fibo(5)를 연산할 때 위에서 구했던 fibo(4)와 fibo(3)을 다시 계산해야 함 