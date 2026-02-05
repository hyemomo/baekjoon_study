function main() {
  let input = [4, 6, 2, 9, 1];

  selectionSort(input);
  console.log(input); // [1, 2, 4, 6, 9] 가 되어야 합니다!

  console.log("정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ");
  console.log(selectionSort([4, 6, 2, 9, 1]));

  console.log("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ");
  console.log(selectionSort([3, -1, 17, 9]));

  console.log("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ");
  console.log(selectionSort([100, 56, -3, 32, 44]));
}

function selectionSort(array) {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    let minValue = array[i];
    let minIndex = i;
    for (let j = i; j < n; j++) {
      if (array[j] < minValue) {
        minValue = array[j];
        minIndex = j;
      }
    }
      let temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
  }
  return array;
}

// Run the main function
main();
