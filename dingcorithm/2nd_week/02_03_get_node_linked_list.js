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
  // index 번째 값을 출력해보자
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
}
let ll = new LinkedList(1);
ll.append(2);
ll.append(5);
ll.append(7);
ll.append(1);
ll.printAll();
console.log(ll.getNode(3));
