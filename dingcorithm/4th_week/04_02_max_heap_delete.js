class MaxHeap2 {
  constructor() {
    this.items = [];
    this.items.push(null); // index 0 is not used
  }

  insert(value) {
    this.items.push(value);
    let curIndex = this.items.length - 1;

    while (curIndex > 1) {
      // cur_index 가 1이 되면 정상을 찍은거라 다른 것과 비교 안하셔도 됩니다!
      let parentIndex = Math.floor(curIndex / 2);
      if (this.items[parentIndex] < this.items[curIndex]) {
        // Swap elements
        let temp = this.items[parentIndex];
        this.items[parentIndex] = this.items[curIndex];
        this.items[curIndex] = temp;
        curIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  delete() {
    //1. 루트 노드와 마지막 노드를 교환한다.
    // 2. 마지막 노드(기존 루트)를 삭제한다.
    // 3. 왼쪽/오른쪽 자식 중 더 큰 값과 비교해서, 더 큰 자식보다 작으면 교환한다.
    // 4. 더 이상 내려갈 필요가 없을 때까지 반복한다.
    const lastIdx = this.items.length - 1;
    [this.items[1], this.items[lastIdx]] = [this.items[lastIdx], this.items[1]];

    const deleted = this.items.pop();
    let idx = 1;
    while (idx * 2 < this.items.length) {
      if (this.items[idx * 2] > this.items[idx * 2 + 1]) {
        [this.items[idx], this.items[idx * 2]] = [
          this.items[idx * 2],
          this.items[idx],
        ];
        idx = idx * 2;
      } else {
        [this.items[idx], this.items[idx * 2 + 1]] = [
          this.items[idx * 2 + 1],
          this.items[idx],
        ];
        idx = idx * 2 + 1;
      }
    }
    return deleted;
  }
}

// Main execution
const maxHeap = new MaxHeap2();
maxHeap.insert(8);
maxHeap.insert(6);
maxHeap.insert(7);
maxHeap.insert(2);
maxHeap.insert(5);
maxHeap.insert(4);
console.log(maxHeap.items); // [null, 8, 6, 7, 2, 5, 4]
console.log(maxHeap.delete()); // 8 을 반환해야 합니다!
console.log(maxHeap.items); // [null, 7, 6, 4, 2, 5]
