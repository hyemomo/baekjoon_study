class MaxHeap {
  constructor() {
    this.items = [];
    this.items.push(null); // index 0 is not used
  }

  insert(value) {
    this.items.push(value);
    let idx = this.items.length - 1;
    while (idx > 1) {
      const parentIdx = Math.floor(idx / 2);
      if (this.items[idx] <= this.items[parentIdx]) break;
      [this.items[idx], this.items[parentIdx]] = [
        this.items[parentIdx],
        this.items[idx],
      ];
      idx = parentIdx;
    }
    console.log(this.items);
  }
}

// Main execution
const maxHeap = new MaxHeap();
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(2);
maxHeap.insert(9);
console.log(maxHeap.items); // [null, 9, 4, 2, 3] 가 출력되어야 합니다!

