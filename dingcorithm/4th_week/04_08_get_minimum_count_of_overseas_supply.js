let ramenStock = 4;
let supplyDates = [4, 10, 15];
let supplySupplies = [20, 5, 10];
let supplyRecoverK = 30;

// Simple MaxHeap implementation
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let largest = index;

      if (
        leftChildIdx < length &&
        this.heap[leftChildIdx] > this.heap[largest]
      ) {
        largest = leftChildIdx;
      }

      if (
        rightChildIdx < length &&
        this.heap[rightChildIdx] > this.heap[largest]
      ) {
        largest = rightChildIdx;
      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }
}
// 최소한의 횟수로 최대의 밀가루
// 현재 재고가 바닥나는 시점 이전까지 받을 수 있는 밀가루 중 제일 많은 밀가루를 받는게 목표이다!
// 1.  현재 재고의 상태에 따라 최곳값을 받아야 한다.
// 2.  제일 많은 값만 가져가면 된다.
function getMinimumCountOfOverseasSupply(stock, dates, supplies, k) {
  let answer = 0;
  let last_added_date_index = 0;
  const maxHeap = new MaxHeap();

  // 기존 공장이 다시 가동하기까지 밀기루가 충분할 때까지
  while (stock <= k) {
    while (
      dates[last_added_date_index] <= stock &&
      last_added_date_index < dates.length
    ) {
      maxHeap.push(supplies[last_added_date_index]);
      last_added_date_index += 1;
    }
    stock+=maxHeap.pop()
    answer+=1
  

  }return answer
}
// Main execution
console.log(
  getMinimumCountOfOverseasSupply(
    ramenStock,
    supplyDates,
    supplySupplies,
    supplyRecoverK,
  ),
);
console.log(
  "정답 = 2 / 현재 풀이 값 = " +
    getMinimumCountOfOverseasSupply(4, [4, 10, 15], [20, 5, 10], 30),
);
console.log(
  "정답 = 4 / 현재 풀이 값 = " +
    getMinimumCountOfOverseasSupply(4, [4, 10, 15, 20], [20, 5, 10, 5], 40),
);
console.log(
  "정답 = 1 / 현재 풀이 값 = " +
    getMinimumCountOfOverseasSupply(2, [1, 10], [10, 100], 11),
);
// k일 까지 다른 공장에서 공급받아야 함.
// (k-현재 stock)= 다른 공장에서 공급 받아야 할 밀가구의 무게
// dates[i] i번째 공급 가능일
// dates[0]= 5 : 0번째 공금 가능일은 5일
// supplies[i]에는 dates[i] 날짜에 공급 가능한 밀가루 수량

// 현재 시점의 최댓값 최솟값 뽑기 = Heap
