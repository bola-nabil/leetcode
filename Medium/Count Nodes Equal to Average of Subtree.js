var averageOfSubtree = function(root) {
    let result = 0;

    const dfs = (node) => {
        if (!node) {
            return [0, 0];
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        const currentSum = left[0] + right[0] + node.val;
        const currentCount = left[1] + right[1] + 1;

        if (Math.floor(currentSum / currentCount) === node.val) {
            result++;
        }

        return [currentSum, currentCount];
    };

    dfs(root);
    return result;
};