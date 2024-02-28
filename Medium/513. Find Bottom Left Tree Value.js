var findBottomLeftValue = function(root) {
    if (!root) {
        return 0;
    }

    let queue = [root];
    let leftNode = 0;

    while (queue.length > 0) {
        let size = queue.length;
        leftNode = queue[0].val;

        for (let i = 0; i < size; i++) {
            let tmp = queue.shift();
            if (tmp.left) {
                queue.push(tmp.left);
            }
            if (tmp.right) {
                queue.push(tmp.right);
            }
        }
    }

    return leftNode;
};
