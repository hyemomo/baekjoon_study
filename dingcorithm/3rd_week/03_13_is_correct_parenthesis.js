function is_correct_parenthesis(s) {
  const stack = [];
  for (let ch of s) {
    if (ch === "(") stack.push(ch);
    else if (ch === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
console.log("정답 = True / 현재 풀이 값 = ", is_correct_parenthesis("(())"));
console.log("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis(")"));
console.log(
  "정답 = False / 현재 풀이 값 = ",
  is_correct_parenthesis("((())))"),
);
console.log("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("())()"));
console.log("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("((())"));
