import './scss/main.scss';

type Node<T> = {
  value: T,
  next: Node<T>,
};

class Stack<T> {
  private head!: Node<T>;
  private n: number;

  constructor() {
    this.n = 0;
  }

  public get size(): number {
    return this.n;
  }

  public get empty(): boolean {
    return this.n === 0;
  }

  public push(value: T) {
    this.head = {
      value,
      next: this.head,
    };
    this.n += 1;
  }

  public pop(): T {
    if (this.empty) {
      throw new Error('stack is empty');
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.n -= 1;
    return value;
  }
}

const stack = new Stack<string>();
stack.push('World!');
stack.push('Hello,');

let str = '';
while (!stack.empty) {
  str += `${stack.pop()} `;
}

console.log(str);
