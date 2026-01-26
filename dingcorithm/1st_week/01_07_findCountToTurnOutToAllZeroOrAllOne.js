function findCountToTurnOutToAllZeroOrAllOne(string) {
  let countToAllZero = 0;
  let countToAllOne = 0;
  if (string[0] == 1) countToAllZero += 1;
  else if (string[0] == 0) countToAllOne += 1;

  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] == 0 && string[i] == 1) countToAllZero += 1;
    else if (string[i - 1] == 1 && string[i] == 0) countToAllOne += 1;
  }
  return Math.min(countToAllOne, countToAllZero);
}

const input = "011110";
const result = findCountToTurnOutToAllZeroOrAllOne(input);
console.log(result);
