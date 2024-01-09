var leafSimilar = function(root1, root2) {
    const collectLeafValues = (root, leafValues) => {
        if (!root)
            return;

        if (!root.left && !root.right)
            leafValues.push(root.val);
        
        collectLeafValues(root.left, leafValues);
        collectLeafValues(root.right, leafValues);
    };

    const leafValues1 = [];
    const leafValues2 = [];
    collectLeafValues(root1, leafValues1);
    collectLeafValues(root2, leafValues2);

    return JSON.stringify(leafValues1) === JSON.stringify(leafValues2);
};
