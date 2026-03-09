// 위의 그래프를 예시로 삼아서 인접 리스트 방식으로 표현했습니다!
const graph = new Map([
  [1, [2, 3, 4]],
  [2, [1, 5]],
  [3, [1, 6, 7]],
  [4, [1, 8]],
  [5, [2, 9]],
  [6, [3, 10]],
  [7, [3]],
  [8, [4]],
  [9, [5]],
  [10, [6]],
]);

function bfsQueue(adjGraph, startNode) {
  const visited = new Set();
  const queue = [];
  queue.push(startNode);
  while (queue.length > 0) {
    let node = queue.shift();
    visited.add(node);
    for (const next of adjGraph.get(node)) {
      if (!visited.has(next)) {
      queue.push(next);
      visited.add(next)
    }
  }
}return [...visited]
}
// Main execution
console.log(bfsQueue(graph, 1)); // 1 이 시작노드입니다!
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 이 출력되어야 합니다!
