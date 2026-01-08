function findMaxPlusOrMultiply(array) {
  let current = array[0];
  for (let i = 1; i <array.length; i++) {
    if (current * array[i] > current + array[i]) {
      current = current * array[i];
    } else {
      current = current + array[i];
    }
  }
  return current
}
console.log(
  "정답 = 728 현재 풀이 값 = " + findMaxPlusOrMultiply([0, 3, 5, 6, 1, 2, 4])
);
console.log(
  "정답 = 8820 현재 풀이 값 = " + findMaxPlusOrMultiply([3, 2, 1, 5, 9, 7, 4])
);
console.log(
  "정답 = 270 현재 풀이 값 = " + findMaxPlusOrMultiply([1, 1, 1, 3, 3, 2, 5])
);
