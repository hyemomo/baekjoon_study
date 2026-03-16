// 방향 벡터 (북, 동, 남, 서)
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

// 왼쪽 회전
function rotateLeft(d) {
  return (d + 3) % 4;
}

// 뒤로 가기
function goBack(d) {
  return (d + 2) % 4;
}

function getCountOfDepartmentsCleanedByRobotVacuum(r, c, d, roomMap) {
  // TODO: 여기 구현
  const n = roomMap.length;
  const m = roomMap[0].length;
  roomMap[r][c] = 2;
  let count = 1;
  const queue = [[r, c, d]]; // 루트 노드를 큐에 넣는다.
  while (queue.length > 0) {
    [r, c, d] = queue.shift();
    for (let i = 0; i < 4; i++) {
      d = rotateLeft(d);
      let newR = r + dr[d];
      let newC = c + dc[d];
      if (
        newR >= 0 &&
        newR < n &&
        newC >= 0 &&
        newC < m &&
        roomMap[newR][newC] === 0
      ) {
        count += 1;
        roomMap[newR][newC] = 2;
        queue.push([newR, newC, d]);
        break;
      } else if (i === 3) {
        let back = goBack(d);
        let newR = r + dr[back];
        let newC = c + dc[back];
        if (roomMap[newR][newC] == 1) {
          return count;
        }
        queue.push([newR, newC, d]);
      }
    }
  }
}

let current_r = 7;
let current_c = 4;
let current_d = 0;

let current_room_map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// 57 이 출력되어야 합니다!
console.log(
  getCountOfDepartmentsCleanedByRobotVacuum(
    current_r,
    current_c,
    current_d,
    current_room_map,
  ),
);

let current_room_map2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

console.log(
  "정답 = 29 / 현재 풀이 값 = ",
  getCountOfDepartmentsCleanedByRobotVacuum(6, 3, 1, current_room_map2),
);

let current_room_map3 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

console.log(
  "정답 = 33 / 현재 풀이 값 = ",
  getCountOfDepartmentsCleanedByRobotVacuum(7, 4, 1, current_room_map3),
);

let current_room_map4 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

console.log(
  "정답 = 25 / 현재 풀이 값 = ",
  getCountOfDepartmentsCleanedByRobotVacuum(6, 2, 0, current_room_map4),
);
