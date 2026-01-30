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
    return current.data;
  }
  // index 위치에 value라는 노드 추가하기
  addNode(index, value) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let count = 0;
    let prev = null;

    while (current) {
      if (index === count) {
        newNode.next = current;
        prev.next = newNode;
        break;
      }
      prev = current;
      current = current.next;
      count++;
    }
  }
}
let ll = new LinkedList(1);
ll.append(2);
ll.append(4);
ll.append(5);
ll.append(6);

ll.addNode(0, 0);
ll.addNode(3, 3);
ll.printAll();
