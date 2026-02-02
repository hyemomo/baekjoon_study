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
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = new Node(value);
  }

  // 뒤에서 k번째 노드 반환
  getKthNodeFromLast(k) {
    let current = this.head;
    let length = 0;

    while (current != null) {
      length += 1;
      current = current.next;
    }
    current = this.head;
    for (let i = 0; i < length - k; i++) {
      current = current.next;
    }
    return current;
  }
}

// 테스트
const linkedList = new LinkedList(6);
linkedList.append(7);
linkedList.append(8);

console.log(linkedList.getKthNodeFromLast(2).data); // 7
