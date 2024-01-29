
class MyQueue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    push(x) {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
        this.s1.push(x);
        while (this.s2.length > 0) {
            this.s1.push(this.s2.pop());
        }
    }

    pop() {
        return this.s1.pop();
    }

    peek() {
        return this.s1[this.s1.length - 1];
    }

    empty() {
        return this.s1.length === 0;
    }
}
