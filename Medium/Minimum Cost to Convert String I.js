var minimumCost = function (source, target, original, changed, cost) {
  let distances = new Array(26).fill(Infinity);

  const graph = distances.map(() => new Array());
  for (let i = 0; i < original.length; i++) {
    const source = original[i].charCodeAt(0) - 97;
    const target = changed[i].charCodeAt(0) - 97;
    const weight = cost[i];

    graph[source].push([target, weight]);
  }

  const storeDistances = new Array(26).fill(null);

  let total = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== target[i]) {
      const from = source[i].charCodeAt(0) - 97;
      const to = target[i].charCodeAt(0) - 97;

      if (storeDistances[from]) {
        total += storeDistances[from][to];
        continue;
      }

      distances[from] = 0;

      const heap = new MyPriorityQueue((a, b) => distances[a] < distances[b]);
      heap.push(from);

      while (!heap.isEmpty()) {
        const current = heap.pop();

        const neighbors = graph[current];
        for (let neighbor of neighbors) {
          const [target, weight] = neighbor;

          if (distances[current] + weight < distances[target]) {
            distances[target] = distances[current] + weight;
            heap.push(target);
          }
        }
      }

      storeDistances[from] = distances;
      total += distances[to];
      distances = new Array(26).fill(Infinity);
    }
  }

  return total === Infinity ? -1 : total;
};

class MyPriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this._heap[0];
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return 2 * idx + 1;
  }

  _rightChild(idx) {
    return 2 * idx + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }
    const poppedValue = this._heap.pop();
    this._siftDown();

    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}
