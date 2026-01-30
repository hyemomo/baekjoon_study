const finding_target = 14;
const finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const is_existing_target_number_sequential = (target, array) => {
  for (const number of array) {
    if (target === number) return true;
  }
  return false;
};
result = is_existing_target_number_sequential(finding_target, finding_numbers);
console.log(result);
