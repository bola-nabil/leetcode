var createBinaryTree = function(descriptions) {
    let mp = {};
    let hasParent = new Set();

    for (let desc of descriptions) {
        if (!mp.hasOwnProperty(desc[0])) {
            mp[desc[0]] = new TreeNode(desc[0]);
        }
        if (!mp.hasOwnProperty(desc[1])) {
            mp[desc[1]] = new TreeNode(desc[1]);
        }
        hasParent.add(desc[1]);
    }

    let root = null;
    for (let desc of descriptions) {
        if (desc[2] === 1) { // left
            mp[desc[0]].left = mp[desc[1]];
        } else { // right
            mp[desc[0]].right = mp[desc[1]];
        }
        if (!hasParent.has(desc[0])) {
            root = mp[desc[0]];
        }
    }

    return root;
};
