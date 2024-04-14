var sumOfLeftLeaves = function(root) {
    if (!root)
        return 0;
    
    let ans = 0;
    
    if (root.left) {
        if (!root.left.left && !root.left.right)
            ans += root.left.val;
        else
            ans += sumOfLeftLeaves(root.left);
    }
    
    ans += sumOfLeftLeaves(root.right);
    
    return ans;
};
