const c = 11;
const b = 2;

function catchMe(conyLoc, brownLoc) {
  const queue = [];
  let time = 1;
  queue.push[conyLoc];

  while (true) {
    if (conyLoc > 200000) return -1;

    const prevConyLoc = queue[time - 1];
    queue.push(prevConyLoc + time);
    time += 1;
  }
}

// Main execution
console.log(catchMe(c, b)); // 5가 나와야 합니다!

console.log(`정답 = 3 / 현재 풀이 값 = ${catchMe(10, 3)}`);
console.log(`정답 = 8 / 현재 풀이 값 = ${catchMe(51, 50)}`);

// 시간에 따른 코니의 위치이다.
// 시간 :     0 ->  1  ->      2    ->     3
// 위치 :     0 ->  C+1 ->  (C+1)+2 -> (C+3)+3
// 현
