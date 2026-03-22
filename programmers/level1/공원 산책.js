const directions = {
  N: [-1, 0],
  S: [1, 0],
  W: [0, -1],
  E: [0, 1],
};
function solution(park, routes) {
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") {
        currentRow = i;
        currentCol = j;
      }
    }
  }
  for (const route of routes) {
    const [direction, distanceStr] = route.split(" ");
    const distance = Number(distanceStr);

    const [dr, dc] = directions[direction];

    let nextRow = currentRow;
    let nextCol = currentCol;
    let canMove = true;

    for (let i = 1; i <= distance; i++) {
      const nr = currentRow + dr * i;
      const nc = currentCol + dc * i;

      if (nr < 0 || nr >= park.length || nc < 0 || nc >= park[0].length) {
        canMove = false;
        break;
      }

      if (park[nr][nc] === "X") {
        canMove = false;
        break;
      }

      nextRow = nr;
      nextCol = nc;
    }

    if (canMove) {
      currentRow = nextRow;
      currentCol = nextCol;
    }
  }

  return [currentRow, currentCol];
}
