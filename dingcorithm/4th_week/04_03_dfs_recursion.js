// Module-level variables (equivalent to static in Java)
const graph = new Map([
  [1, [2, 5, 9]],
  [2, [1, 3]],
  [3, [2, 4]],
  [4, [3]],
  [5, [1, 6, 8]],
  [6, [5, 7]],
  [7, [6]],
  [8, [5]],
  [9, [1, 10]],
  [10, [9]],
]);

const visited = [];

function dfsRecursion(adjacentGraph, curNode, visitedArray) {
  visitedArray.push(curNode);
  for (const nextNode of adjacentGraph.get(curNode)||[]) {
    if (!visitedArray.includes(nextNode))
      dfsRecursion(adjacentGraph, nextNode, visitedArray);
  }

}

// Main execution
dfsRecursion(graph, 1, visited); // 1 이 시작노드입니다!
console.log(visited); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 이 출력되어야 합니다!
