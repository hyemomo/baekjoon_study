function solution(polynomial) {
  const result = Array(2).fill(0);
  let answer = "";
  for (const p of polynomial.split(" + ")) {
    if (p.includes("x")) {
      const coef = p === "x" ? 1 : Number(p.slice(0, -1));
      result[1] += coef;
    } else {
      result[0] += Number(p);
    }
  }
  if (result[1]) {
    answer += result[1] === 1 ? "x" : `${result[1]}x`;
    if (result[0]) answer += " + ";
  }

  if (result[0]) answer += `${result[0]}`;

  return answer;
}
