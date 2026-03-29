function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const e of edge) {
    const prev = e[0];
    const next = e[1];
    graph[prev].push(next);
    graph[next].push(prev);
  }
  const visited = Array(n + 1).fill(false);
  const distance = Array(n + 1).fill(0);

  const queue = [1];
  visited[1] = true;
  let front = 0;

  while (front < queue.length) {
    const cur = queue[front++];

    for (const next of graph[cur]) {
      if (!visited[next]) {
     