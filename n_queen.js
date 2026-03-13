const n = 8;
const board = Array.from({ length: n }, () => Array(n).fill(0));
let count = 0;

// 8방향
const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
const dy = [0, 0, -1, 1, -1, 1, -1, 1];

function canPlace(x, y) {
  for (let i = 0; i < dx.length; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    while (nx >= 0 && nx < n && ny >= 0 && ny < n) {
      if (board[nx][ny] === 1) return false;
      nx += dx[i];
      ny += dy[i];
    }
  }
  return true;
}

function dfs(row) {
  if (row === n) {
    count++;
    return;
  }

  for (let col = 0; col < n; col++) {
    if (!canPlace(row, col)) continue;
    board[row][col] = 1; // 1을 놓았을때
    dfs(row + 1);
    board[row][col] = 0; // 0을 놓았을때
  }
}

dfs(0);
console.log(count); // 92
