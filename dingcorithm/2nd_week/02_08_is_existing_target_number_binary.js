function isExistingTargetNumberBinary(target, array) {
  let current_min = 0;
  let current_max = array.length - 1;

  while (current_min <= current_max) {
    const index = Math.floor((current_min + current_max) / 2);
    if (target === array[index]) return true;
    if (target > array[index]) {
      current_min = index + 1;
    } else {
      current_max = index - 1;
    }
  }
  return false;
}

// Main execution
const findingTarget = 14;
const findingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// 최소                  탐색                            최대
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
//       최소                        최대
// UP -> [9, 10, 11, 12, 13, 14, 15, 16]
//         최소                최대
// DOWN -> [1, 2, 3, 4, 5, 6, 7]
//
//
// 최소                  탐색                            최대
// 0                     7                             15
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
//
//                          최소        탐색             최대
//                          8          11              15
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
//
//                                         최소 탐색     최대
//                                         12  13      15
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

//                                             최소 탐색 최대
//                                             13  14  15
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

//                                                 최소 최대
//                                                 14  15
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

//                                                   최소=최대
//                                                     15
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const result = isExistingTargetNumberBinary(findingTarget, findingNumbers);
console.log(result);
