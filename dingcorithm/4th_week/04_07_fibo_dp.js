// 1. 메모용 데이터를 만든다. 처음 값인 Fibo(1), Fibo(2) 는 각각 1씩 넣어서 저장해둔다.
// 2. Fibo(n) 을 구할 때 만약 메모에 그 값이 있다면 바로 반환한다.
// 3. Fibo(n) 을 처음 구했다면 메모에 그 값을 기록한다.

let input = 100;

const memo = new Map();
memo.set(1, 1);
memo.set(2, 1);

// 1. 메모에 이미 해당 값이 있으면 반환한다.
// 2. 만약 없다면, 그 값을 피보나치를 통해 구하고 메모에 저장한다.
function fiboDynamicProgramming(n, fiboMemo) {
  if (memo.has(n)) return memo.get(n);
  const nth_fibo =
    fiboDynamicProgramming(n - 1, memo) + fiboDynamicProgramming(n - 2, memo);
  memo.set(n, nth_fibo);
  return nth_fibo;
}
// Main execution
console.log(fiboDynamicProgramming(input, memo));
