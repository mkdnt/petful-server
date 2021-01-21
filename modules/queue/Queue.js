class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
          node.prev = this.last
          this.last.next = node;
        }
        this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
           if (this.first === null) {
               return;
           }
           const node = this.first;
           this.first = node.next;
            //if this is the last item in the queue
           if (node === this.last) {
               this.last = null;
           }
           return node.value;
  }

  show() {
    // Return the next item in the queue.
    if (!this.first) return null;
    return this.first.value
  }

  all() {
    // Return all items in the queue.
    let arr = [];
    let node = this.first;

    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }
}

module.exports = Queue
