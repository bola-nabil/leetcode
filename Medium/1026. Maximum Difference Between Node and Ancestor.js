var maxAncestorDiff = function(root) {
    if (!root)
        return 0;
    let diff = 0;
    helper(root, root.val, root.val);
    return diff;

    function helper(root, minVal, maxVal) {
        if (!root)
            return;
        diff = Math.max(diff, Math.max(Math.abs(minVal - root.val), Math.abs(maxVal - root.val)));
        minVal = Math.min(minVal, root.val);
        maxVal = Math.max(maxVal, root.val);
        helper(root.left, minVal, maxVal);
        helper(root.right, minVal, maxVal);
    }
};