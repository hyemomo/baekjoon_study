function solution(s) {
  const stack = [];
  for (const ch of s) {
    if (ch === "(") stack.push(ch);
    else if (ch === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  if (stack.length === 0) return true;
  else return false;
}
