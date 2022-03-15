const defaultEquals = require('../../utils/defaultEquals');
const Node = require('../../models/linked-list-models');

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
    } else {
      let previous;

      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.count--;

    return current.element;
  }
}

module.exports = LinkedList;
