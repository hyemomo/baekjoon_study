function main() {
  let prices = [1, 2, 3, 2, 3];

  console.log(getPriceNotFallPeriods(prices));

  console.log("정답 = [4, 3, 1, 1, 0] / 현재 풀이 값 = ");
  console.log(getPriceNotFallPeriods(prices));

  console.log("정답 = [6, 2, 1, 3, 2, 1, 0] / 현재 풀이 값 = ");
  console.log(getPriceNotFallPeriods([3, 9, 9, 3, 5, 7, 2]));

  console.log("정답 = [6, 1, 4, 3, 1, 1, 0] / 현재 풀이 값 = ");
  console.log(getPriceNotFallPeriods([1, 5, 3, 6, 7, 6, 5]));
}

function getPriceNotFallPeriods(prices) {
  const n = prices.length;
  const result = new Array(n).fill(0);

  for (let i = 0; i < n - 1; i++) {
    let cnt = 0;
    for (let j = i + 1; j < n; j++) {
      if (prices[i] <= prices[j]) {
        cnt++;
      } else {
        cnt++; // 가격 떨어지는 순간도 1초로 기록
        break;
      }
    }
    result[i] = cnt;
  }

  return result;
}

// Run the main function
main();
