function findMaxOccurredAlphabet(str) {
str = str.toLowerCase()
  let result = 0;
  let arr = Array(26).fill(0);
  for (const ch of str) {
    if (ch >= "a" && ch <= "z") {
      arr[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
  }
  for (const i of arr) {
    if (i > result) {
      result = i;
    }
  }

  return result.fromCharCode(16);
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
