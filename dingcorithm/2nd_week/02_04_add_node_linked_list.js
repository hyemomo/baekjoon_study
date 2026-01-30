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
    let new_node = new Node(value);
    let current =this.head;
    let count = 0;
    while (current) {
      if (index === count) {
        new_node.next = current.next;
        current.next = new_node;
        break;
      }
      current = current.next;
      count++;
    }
  }
}
let ll = new LinkedList(1);
ll.append(2);
ll.append(3);
ll.append(5);
ll.append(6);

ll.addNode(2, 4);
ll.printAll();
