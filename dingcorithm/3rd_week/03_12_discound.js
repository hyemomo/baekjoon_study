function getMaxDiscountedPrice(prices, coupons) {
  prices.sort((a, b) => b - a);
  coupons.sort((a, b) => b - a);
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    if (i < coupons.length) {
      total += (prices[i] * (100 - coupons[i])) / 100;
    } else {
      total += prices[i];
    }
  }
  return total;
}

// 테스트
console.log(
  "정답 = 926000 / 현재 풀이 값 = ",
  getMaxDiscountedPrice([30000, 2000, 1500000], [20, 40]),
);

console.log(
  "정답 = 485000 / 현재 풀이 값 = ",
  getMaxDiscountedPrice([50000, 1500000], [10, 70, 30, 20]),
);

console.log(
  "정답 = 1550000 / 현재 풀이 값 = ",
  getMaxDiscountedPrice([50000, 1500000], []),
);

console.log(
  "정답 = 1458000 / 현재 풀이 값 = ",
  getMaxDiscountedPrice([20000, 100000, 1500000], [10, 10, 10]),
);
