const addOneRow = (root, val, depth) => {    
    if (depth === 1) {
        let n = new TreeNode(val);
        n.left = root;
        return n;
    }
    
    const traverse = (node, depth, dir) => {
        if (depth === 0 && !node) {
            return new TreeNode(val);
        }
        if (depth === 0 && node) {
            let n = new TreeNode(val);
            n[dir] = node;
            return n;
        }

        if (!node) return null;
        
        node.left = traverse(node.left, depth - 1, 'left')
        node.right = traverse(node.right, depth - 1, 'right')
        return node;
    }
    
    return traverse(root, depth - 1);
};
