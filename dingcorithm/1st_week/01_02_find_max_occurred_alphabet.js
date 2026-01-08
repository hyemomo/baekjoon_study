function findMaxOccurredAlphabet(str) {
  str = str.toLowerCase();
  let max = 0;
  let maxIndex = -1;
  let arr = Array(26).fill(0);
  for (const ch of str) {
    if (ch >= "a" && ch <= "z") {
      arr[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
  }
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = i;
  }
}

  return String.fromCharCode("a".charCodeAt(0)+maxIndex);
}
console.log(
  "정답 = i 현재 풀이 값 = " +
    findMaxOccurredAlphabet("hello my name is dingcodingco")
);
console.log(
  "정답 = e 현재 풀이 값 = " + findMaxOccurredAlphabet("we love algorithm")
);
console.log(
  "정답 = b 현재 풀이 값 = " + findMaxOccurredAlphabet("best of best youtube")
);
