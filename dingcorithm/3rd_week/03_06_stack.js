class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    const newNode = new Node();
    newNode.data = value;

    if (this.head == null) this.head = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop() {
    if (this.head == null) return;
    else {
      let value = this.head.data;
      this.head = this.head.next;
      return value;
    }
  }

  peek() {
    if (this.head == null) return;
    else {
      return this.head.data;
    }
  }

  isEmpty() {
    return this.head == null;
  }
}

function main() {
  let stack = new Stack();
  stack.push(4);
  console.log(stack.peek());

  stack.push(3);
  console.log(stack.peek());

  stack.push(5);
  console.log(stack.peek());

  stack.pop();
  console.log(stack.peek());

  stack.pop();
  console.log(stack.peek());

  stack.pop();
  console.log(stack.peek());
}

// Run the main function
main();
