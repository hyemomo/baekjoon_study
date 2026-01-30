class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }
  append(value) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value);
  }
  printAll() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
  getNode(index) {
    let count = 0;
    let current = this.head;
    while (current) {
      if (index === count) break;
      current = current.next;
      count += 1;
    }
    return current;
  }

  addNode(index, value) {
    let new_node = new Node(value);
    if (index === 0) {
      new_node.next = this.head;
      this.head = new_node;
      return;
    }
    let prev = this.getNode(index - 1);
    new_node.next = prev.next;
    prev.next = new_node;
  }
  // index번째 노드 삭제하기
  deleteNode(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.getNode(index)
    let prev = this.getNode(index - 1);
    prev.next = current.next
  }
}
let ll = new LinkedList(1);
ll.append(2);
ll.append(4);
ll.append(5);
ll.append(6);

ll.addNode(0, 0);
ll.addNode(3, 3);



ll.deleteNode(1)
ll.deleteNode(4)

ll.printAll();
