let seatCount = 9;
let vipSeatArray = [4, 7];

const memo = new Map();
memo.set(1, 1);
memo.set(2, 2);

// 1. 메모에 이미 해당 값이 있으면 반환한다.
// 2. 만약 없다면, 그 값을 피보나치를 통해 구하고 메모에 저장한다.
function fiboDynamicProgramming(n, fiboMemo) {
  if (fiboMemo.has(n)) {
    return fiboMemo.get(n);
  }

  const nthFibo =
    fiboDynamicProgramming(n - 1, fiboMemo) +
    fiboDynamicProgramming(n - 2, fiboMemo);
  fiboMemo.set(n, nthFibo);

  return nthFibo;
}

function getAllWaysOfTheaterSeat(totalCount, fixedSeatArray) {
  let seatCount = 9;
  let vipSeatArray = [4, 7];

  const memo = new Map();
  memo.set(1, 1);
  memo.set(2, 2);

  // 1. 메모에 이미 해당 값이 있으면 반환한다.
  // 2. 만약 없다면, 그 값을 피보나치를 통해 구하고 메모에 저장한다.
  function fiboDynamicProgramming(n, fiboMemo) {
    if (fiboMemo.has(n)) {
      return fiboMemo.get(n);
    }

    const nthFibo =
      fiboDynamicProgramming(n - 1, fiboMemo) +
      fiboDynamicProgramming(n - 2, fiboMemo);
    fiboMemo.set(n, nthFibo);

    return nthFibo;
  }
  // 3     2    2
  // f(3) f(2) f(2)
  // 123 4 56 7 89

  function getAllWaysOfTheaterSeat(totalCount, fixedSeatArray) {
    let all_ways = 1;
    let current = 0;
    for (const fixed_seat of fixedSeatArray) {
      let count = 0;
      let fixed_seat_index = fixed_seat - 1;
      all_ways *= fiboDynamicProgramming(fixed_seat_index - current, memo);
      current = fixed_seat;
    }
    all_ways *= fiboDynamicProgramming(totalCount - current, memo);
    return all_ways;
  }

  // Main execution
  // 12가 출력되어야 합니다!
  console.log(getAllWaysOfTheaterSeat(seatCount, vipSeatArray));
}

// Main execution
// 12가 출력되어야 합니다!
console.log(getAllWaysOfTheaterSeat(seatCount, vipSeatArray));
