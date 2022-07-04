class LinkedList {
  constructor() {
    this.head = null; // first element of the list
    this.tail = null; // last element of the list
  }

  append(value) {
    const newNode = { value: value, next: null }; // next will be next node

    if (this.tail) this.tail.next = newNode; // add new node to previous node's next property
    this.tail = newNode; // store new node to previous tail (does not replace)
    if (!this.head) this.head = newNode;
  }

  prepend(value) {
    const newNode = { value: value, next: this.head }; // use previous first this.head element as next

    this.head = newNode;
    if (!this.tail) this.tail = newNode; // if no tail, set tail to new node
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) return;

    let curNode = this.head;

    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }

      curNode = curNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) return null; // if list is empty, leave

    while (this.head && this.head.value === value) {
      // get rid of all head nodes that have what we want to delete
      this.head = this.head.next;
    }

    let curNode = this.head;

    while (curNode.next) {
      // check the node's next values
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  toArray() {
    const elements = [];

    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  }
}

const linkedList = new LinkedList();
linkedList.append(33);
linkedList.append(['smith', 'mitchell', 'franz', 'obi']);
linkedList.append('julio');
linkedList.append('julio');
linkedList.append(false);
linkedList.append(4.18);
linkedList.prepend('first value!');
linkedList.prepend('first value!');

console.log(linkedList);

linkedList.delete('julio');
linkedList.delete('first value!');
linkedList.delete(4.18);

const linkedListArr = linkedList.toArray();

console.log(linkedListArr);
console.log(linkedList.find('julio'));
console.log(linkedList.find(33));

linkedList.insertAfter('second value', 33);

console.log(linkedList.toArray());
