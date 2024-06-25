var bstToGst = function(root) {
    const getSum = (node, sum) => {
        if (!node) return sum;
    
        node.val += getSum(node.right, sum);

        return getSum(node.left, node.val);
    };
    
    getSum(root, 0);
    return root;
};
