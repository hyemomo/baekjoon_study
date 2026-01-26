function findPrimeListUnderNumber(number) {
  const primeNumberList = Array();

  for (let i = 2; i < number + 1; i++) {
    //i= 19
    let isPrimeNumber = true;
    // 소수의 특징!
    // N의 제곱근보다 크지 않은 어떤 소수로도 나누어 떨어지지 않는다.
    // 소수 3에서 나누어 떨어지지 않았으면 9 아래의 소수로는 절대로 나누어떨어지지 않는다.
    for (const j of primeNumberList) {
      if (j * j > i) break; // 바로 소수
      if (i % j === 0) {
        isPrimeNumber = false; //[2,3,5] -> i가 25보다 작다! 그럼 무조건 나누어 떨어지지 않음. => 19는 소수이다.
        break;
      }
    }
    if (isPrimeNumber === true) {
      primeNumberList.push(i);
    }
  }
  return primeNumberList;
}

const input = 20;
const result = findPrimeListUnderNumber(input);
console.log(result);
