// 소수는 자기 자신과 1외에는 아무것도 나눌 수 없다.
function findPrimeListUnderNumber(number) {
  const primeNumberList = Array();
  primeNumberList.push(1);
  //i =2부터 20까지 소수인가? i가 소수라면 primeNumberList에 넣어라.
  for (let i = 2; i < number + 1; i++) {
    let isPrimeNumber = true;
    for (let j = 2; j < i; j++) {
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
