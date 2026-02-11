function getReceiverTopOrders(height) {
  let answer = [];
  for (let i = height.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (height[i] <= height[j]) {
        answer[i] = j + 1;
        break;
      } else {
        answer[i] = 0;
      }
    }
    answer[0] = 0;
  }
  return answer;
}
function main() {
  let top_heights = [6, 9, 5, 7, 4];

  console.log(getReceiverTopOrders(top_heights)); // [0, 0, 2, 2, 4] 가 반환되어야 한다!

  console.log("정답 = [0, 0, 2, 2, 4] / 현재 풀이 값 = ");
  console.log(getReceiverTopOrders([6, 9, 5, 7, 4]));

  console.log("정답 = [0, 0, 2, 3, 3, 3, 6] / 현재 풀이 값 = ");
  console.log(getReceiverTopOrders([3, 9, 9, 3, 5, 7, 2]));

  console.log("정답 = [0, 0, 2, 0, 0, 5, 6] / 현재 풀이 값 = ");
  console.log(getReceiverTopOrders([1, 5, 3, 6, 7, 6, 5]));
}
main();
