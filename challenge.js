// Optionally: start with your code from LinkedList challenge.
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(number) {
    // your code here
    const newNode = new Node(number);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    // your code here
    if (!this.first) return null;
    const firstVal = this.first.value;
    if (this.size === 1) this.last = null;
    this.first = this.first.next;
    this.size--;
    return firstVal;
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.pop())
// => 5

stack.push(2)
stack.push(7)
console.log(stack.pop())
// => 7

console.log(stack.pop())
// => 2

console.log(stack.pop())
// => 3

module.exports = Stack
