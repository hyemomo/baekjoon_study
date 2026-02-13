class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    if (this.isEmpty()) return "큐가 비어있습니다.";
    const value = this.head.data
    this.head = this.head.next;
    return value;
  }

  peek() {
    if (this.isEmpty()) return "큐가 비어있습니다.";
    return this.head.data;
  }

  isEmpty() {
    return this.head === null;
  }
}

function main() {
  let queue = new Queue();
  queue.enqueue(4);
  console.log(queue.peek());
  queue.enqueue(2);
  console.log(queue.peek());
  queue.enqueue(3);
  console.log(queue.peek());

  queue.dequeue();
  console.log(queue.peek());

  queue.dequeue();
  console.log(queue.peek());

  queue.dequeue();
  console.log(queue.peek());
}

// Run the main function
main();
