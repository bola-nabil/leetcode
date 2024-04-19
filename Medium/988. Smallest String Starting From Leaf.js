var smallestFromLeaf = function(root) {
    let prevMax;
    const alphabhets = 'abcdefghijklmnopqrstuvwxyz';
    function smallest(root, prevStr) {
        if (!root) return;
            const str = `${alphabhets[root.val]}${prevStr}`;

        if (!root.left && !root.right)
            prevMax = (!prevMax || prevMax > str) ? str : prevMax;

        if (root.left)
            smallest(root.left, str);

        if (root.right)
            smallest(root.right, str);
    }
    smallest(root, '');
    return prevMax || '';
};
