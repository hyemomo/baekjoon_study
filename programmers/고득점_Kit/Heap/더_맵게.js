// 주어진 스코빌 지수 리스트를 MinHeap으로 정렬
// 루트 노드 + 루트 노드의 자식 노드 중 작은 노드와 아래의 계산을 한다.
//   ==>  섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
// 두 노드 모두 힙에서 제거한다.
// 섞은 음식을 힙에 넣는다.
// 스코빓 지수가 k 이상이 될때까지 반복한다.

class MinHeap {
  constructor() {
    this.items = [];
    this.items.push(null);
  }
  insert(value) {
    this.items.push(value);
    let idx = this.items.length - 1;
    while (idx > 1) {
      const parentIdx = Math.floor(idx / 2);
      if (this.items[idx] >= this.items[parentIdx]) break;
      [this.items[idx], this.items[parentIdx]] = [
        this.items[parentIdx],
        this.items[idx],
      ];
      idx = parentIdx;
    }
  }
  delete() {
    const lastIdx = this.items.length - 1;
    const rootIdx = 1;
    const minValue = this.items[1];

    [this.items[rootIdx], this.items[lastIdx]] = [
      this.items[lastIdx],
      this.items[rootIdx],
    ];
    this.items.pop();
    this.items[rootIdx];
    let idx = 1;
    while (idx * 2 < this.items.length) {
      let left = idx * 2;
      let right = idx * 2 + 1;
      let smallerChild = left;
      if (right < this.items.length && this.items[right] < this.items[left]) {
        smallerChild = right;
      }

      if (this.items[idx] > this.items[smallerChild]) {
        [this.items[idx], this.items[smallerChild]] = [
          this.items[smallerChild],
          this.items[idx],
        ];
      } else {
        break;
      }
      idx = smallerChild;
    }
    return minValue;
  }
}

function solution(scoville, K) {
  var answer = 0;
  const heap = new MinHeap();
  for (const s of scoville) {
    heap.insert(s);
  }
  while (heap.items[1] < K) {
    if (heap.items.length - 1 < 2) return -1;
    const first = heap.delete();
    const second = heap.delete();
    const newScoville = first + second * 2;

    heap.insert(newScoville);
    answer += 1;
  }

  return answer;
}
// 테스트 실행 함수
function runTest(scoville, K, expected) {
  const result = solution([...scoville], K); // 원본 배열 보호
  const pass = result === expected;

  console.log(
    `${pass ? "✅ PASS" : "❌ FAIL"} | scoville=${JSON.stringify(scoville)}, K=${K}, expected=${expected}, result=${result}`,
  );
}

// 테스트 케이스
function test() {
  runTest([1, 2, 3, 9, 10, 12], 7, 2); // 기본 예제
  runTest([1, 1, 1], 10, -1); // 끝까지 섞어도 불가능
  runTest([10, 12], 7, 0); // 이미 모두 K 이상
  runTest([0, 0, 3, 9], 10, 3); // 0 포함
  runTest([1, 2], 3, 1); // 한 번만 섞으면 됨
  runTest([1, 2], 100, -1); // 두 개뿐인데 불가능
  runTest([5, 6, 7], 7, 1); // 한 번 섞어서 해결
  runTest([7, 7, 7], 7, 0); // 전부 정확히 K
  runTest([0, 0, 0, 0], 1, -1); // 모두 0이라 불가능
  runTest([1, 2, 3, 4, 5], 11, 3); // 여러 번 섞기
}

test();
