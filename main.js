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

  toString() {
    let head = this.HEAD;
    let index = 0;
    let srt = "";
    while (head != null) {
      //console.log(head);
      srt += index == 0 ? `(${head.value}) -> ` : ` (${head.value}) -> `;
      head = head.nextNode;
      index++;
    }
    srt += "null";
    console.log(srt);
  }

  forEach(callBack) {
    let head = this.HEAD;
    let index = 0;

    while (head != null) {
      // console.log(head);
      callBack(head, index);

      head = head.nextNode;
      index++;
    }
  }
  size() {
    let count = 0;
    this.forEach((val, index) => (count = index));
    console.log(count + 1);
  }
  head() {
    return this.HEAD;
  }
  tail() {
    return this.TAIL;
  }
  at(index) {
    let head = this.HEAD;
    let i = 0;
    if (index < 0) {
      return null;
    }
    while (head != null) {
      if (i === index) {
        return head;
      }
      head = head.nextNode;
      i++;
    }
    return null;
  }
  contains(value) {
    let head = this.HEAD;
    let index = 0;
    while (head != null) {
      if (head.value === value) {
        return true;
      }
      head = head.nextNode;
      index++;
    }
    return false;
  }
  find(value) {
    let head = this.HEAD;
    let index = 0;
    while (head != null) {
      if (head.value === value) {
        return index;
      }
      head = head.nextNode;
      index++;
    }
    return null;
  }
  pop() {
    const head = this.HEAD;
    this.HEAD = this.HEAD.nextNode;

    return head;
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
l1.append(n1);
l1.append(n2);
l1.append(n3);
l1.append(n4);
l1.prepend(n0);
// l1.print();
// l1.forEach((node) => console.log(node.value));
// console.table(l1);
l1.size();
console.log(l1.head());
console.log(l1.tail());
console.log(`at ${l1.at(2)} not at ${l1.at(9)}`);
console.log(`true: ${l1.contains('value1')} false: ${l1.contains('here')}`)
