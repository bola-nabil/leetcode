var balanceBST = function(root) {
    const values = toArray(root);
    return toBST(values);
    
    function toBST(arr) {
        if (arr.length===0) return null;
        if (arr.length===1) return new TreeNode(arr[0]);
        const mid = Math.floor(arr.length / 2);
        const left = toBST(arr.slice(0, mid));
        const right = toBST(arr.slice(mid+1));
        return new TreeNode(arr[mid], left, right);
    }
    
    function toArray(node) {
        if (!node) return [];
        return [...toArray(node.left), node.val, ...toArray(node.right)];
    }
};
