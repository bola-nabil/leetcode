var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    let edgeCount = 0;
    let parentCount = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (leftChild[i] !== -1) {
            parentCount[leftChild[i]]++;

            if (parentCount[leftChild[i]] > 1) return false;
            edgeCount++;
        }

        if (rightChild[i] !== -1) {
            parentCount[rightChild[i]]++;

            if (parentCount[rightChild[i]] > 1) return false;
            edgeCount++;
        }
    }

    if (edgeCount !== n - 1) return false;

    let root = -1;
    for (let i = 0; i < n; i++) {
        if (parentCount[i] === 0) {
            if (root === -1) root = i;
            else return false;
        }
    }

    let q = [root];
    let visitedCount = 0;

    while (q.length > 0) {
        let node = q.shift();
        visitedCount++;

        if (leftChild[node] !== -1) q.push(leftChild[node]);
        if (rightChild[node] !== -1) q.push(rightChild[node]);
    }

    return visitedCount === n;
};