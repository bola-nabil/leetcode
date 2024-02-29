var isEvenOddTree = function(root) {
    if (root === null) {
        return true;
    }
    let queue = [root];
    let flag = true;
    while (queue.length > 0) {
        let size = queue.length;
        let prev = flag ? -Infinity : Infinity;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (flag) {
                if (node.val % 2 === 0 || node.val <= prev) {
                    return false;
                }
            } else {
                if (node.val % 2 !== 0 || node.val >= prev) {
                    return false;
                }
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            prev = node.val;
        }
        flag = !flag;
    }
    return true;
};