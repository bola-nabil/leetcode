class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  removeMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (true) {
      let leftChildIndex = currentIndex * 2 + 1;
      let rightChildIndex = currentIndex * 2 + 2;
      let smallestChildIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (smallestChildIndex !== currentIndex) {
        [this.heap[currentIndex], this.heap[smallestChildIndex]] = [
          this.heap[smallestChildIndex],
          this.heap[currentIndex],
        ];
        currentIndex = smallestChildIndex;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

var minOperations = function (nums, k) {
  const heap = new MinHeap();
  nums.forEach((num) => heap.insert(num));
  let operations = 0;

  while (heap.size() >= 2 && heap.peek() < k) {
    const x = heap.removeMin();
    const y = heap.removeMin();
    const sum = Math.min(x, y) * 2 + Math.max(x, y);
    heap.insert(sum);
    operations++;
  }

  return heap.peek() < k ? -1 : operations;
};
