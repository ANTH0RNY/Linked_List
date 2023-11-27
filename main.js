function Node(Value) {
  const value = Value;
  const nextNode = null;
  return {
    value,
    nextNode,
  };
}

class LinkedList {
  constructor() {
    this.HEAD = null;
    this.TAIL = null;
  }

  append(node) {
    if (this.HEAD == null || this.TAIL == null) {
      this.HEAD = node;
      this.TAIL = node;
      return;
    }

    this.TAIL.nextNode = node;
    this.TAIL = node;
  }

  prepend(node) {
    if (this.HEAD == null || this.TAIL == null) {
      this.HEAD = node;
      this.TAIL = node;
      return;
    }
    node.nextNode = this.HEAD;
    this.HEAD = node;
  }

  print() {
    let head = this.HEAD;

    while (head != null) {
      console.log(head);
      head = head.nextNode;
    }
  }

  forEach(callBack) {
    let head = this.HEAD;
    let index = 0;

    while (head != null) {
      console.log(head);
      callBack(head, index);

      head = head.nextNode;
      index++;
    }
  }
}

const n1 = Node("value1");
const n2 = Node("value2");
const n3 = Node("value3");
const n4 = Node("value4");

const n0 = Node("value0");
// n1.value = "value2";
// console.log(n1);
const l1 = new LinkedList();
// l1.append(n1);
// l1.append(n2);
// l1.append(n3);
// l1.append(n4);
l1.prepend(n0);
// l1.print();
l1.forEach((node) => console.log(node.value));
// console.table(l1);
