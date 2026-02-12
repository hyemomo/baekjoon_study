function getReceiverTopOrders(heights) {
let answer = new Array(heights.length).fill(0);
  while (heights.length) {
    let height = heights.pop();
    let idx = heights.length;
    for (let i = heights.length - 1; i > -1; i--) {
      if (heights[i] > height) {
        answer[idx] = i + 1;
        break;
      }
    }      

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
