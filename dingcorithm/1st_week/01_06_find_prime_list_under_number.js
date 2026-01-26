function findPrimeListUnderNumber(number) {
  const primeNumberList = Array();
  
  for (let i = 2; i < number + 1; i++) {
    //만약 i=19 라면
    let isPrimeNumber = true;
    //현재 j= 2~18 까지 모두 비교를 해주고 있음
    // 19가 만약에 2와 3으로 나누어떨어지지 않는다면 6으로도 나누어 떨어지지 않을 것임.
    for (const j of primeNumberList) {
      // 소수 리스트에 있는 소수로 나누었을 때 나누어 떨어지지 않으면 i도 소수임.
      if (i % j === 0) isPrimeNumber = false;
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
