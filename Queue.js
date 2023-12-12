const LinkedList = require("./LinkedList");

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;  /* Bounded Queue **/
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if(this.hasRoom()){ /* Prevent Overflow **/
      this.queue.addToTail(data);
      this.size++;
      console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    } else {
      throw new Error('Queue is full!');
    }
  }

  dequeue() {
    if(!this.isEmpty()) {  /* Prevent Underflow **/
      const data = this.queue.removeHead();
      this.size--;
      console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
      return data;
    } else {
      throw new Error('Queue is empty!')
    }
  }
}

module.exports = Queue;

const boundedQueue = new Queue(3);
boundedQueue.enqueue(1);
boundedQueue.enqueue(2);
boundedQueue.enqueue(3);
