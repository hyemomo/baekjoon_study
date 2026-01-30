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
    let current = this.getNode(index);
    let prev = this.getNode(index - 1);
    prev.next = current.next;
  }
}
// 현재 중복되는 코드가 많음!-> 함수로 나누자.
const getLinkedListSum = (list1, list2) => {
  sum1 = getSingleLinkedListSum(list1);
  sum2 = getSingleLinkedListSum(list2);
  return sum1 + sum2;
};

const getSingleLinkedListSum = (list) => {
  let sum = 0;
  let cur = list.head;
  while (cur) {
    sum = sum * 10;
    sum += cur.data;
    cur = cur.next;
  }
  return sum;
};

let list1 = new LinkedList(6);
list1.append(7);
list1.append(8);

let list2 = new LinkedList(3);
list2.append(5);
list2.append(4);
console.log(getLinkedListSum(list1, list2));
