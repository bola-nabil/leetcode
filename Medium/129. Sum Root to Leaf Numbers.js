var sumNumbers = function(root) {
    function traverse(node, num) {
        if(!node) return null;
        num += node.val
        if(!node.left && !node.right) return +num;
        return traverse(node.left, num) + traverse(node.right, num);
    }
    return traverse(root, '');
};
