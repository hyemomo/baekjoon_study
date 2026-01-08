function findNotRepeatingFirstCharacter(string) {
  let arr = Array(26).fill(0);
  for (const ch of string) {
    arr[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  // 원본 문자열 순서대로 찾는다.
  for (const ch of string) {
    const idx = ch.charCodeAt(0) - "a".charCodeAt(0);
    if (arr[idx] === 1) {
      return ch;
    }
  }
  return "_";
}

console.log(
  "정답 = d 현재 풀이 값 = " + findNotRepeatingFirstCharacter("abadabac")
);
console.log(
  "정답 = c 현재 풀이 값 = " + findNotRepeatingFirstCharacter("aabbcddd")
);
console.log(
  "정답 = _ 현재 풀이 값 = " + findNotRepeatingFirstCharacter("aaaaaaaa")
);
