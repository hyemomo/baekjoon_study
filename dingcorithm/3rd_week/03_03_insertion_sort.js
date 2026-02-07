function main() {
  let input = [4, 6, 2, 9, 1];

  insertion_sort(input);
  console.log(input); // [1, 2, 4, 6, 9] 가 되어야 합니다!

  console.log("정답 = [4, 5, 7, 7, 8] / 현재 풀이 값 = ");
  console.log(insertion_sort([5, 8, 4, 7, 7]));

  console.log("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ");
  console.log(insertion_sort([3, -1, 17, 9]));

  console.log("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ");
  console.log(insertion_sort([100, 56, -3, 32, 44]));
}

function insertion_sort(array) {
  let n = array.length;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i - j] < array[i - j - 1]) {
        let temp = array[i - j];
        array[i - j] = array[i - j - 1];
        array[i - j - 1] = temp;
      } else {
        break;
      }
    }
  }

  return array;
}

main();
