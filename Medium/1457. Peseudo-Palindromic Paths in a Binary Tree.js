var pseudoPalindromicPaths = function(root) {
    let count = 0;
    let stack = [[root, 0]];

    while (stack.length > 0) {
        let [node, path] = stack.pop();

        if (node !== null) {
            path ^= 1 << node.val;

            if (node.left === null && node.right === null) {
                if ((path & (path - 1)) === 0)
                    count += 1;
            } else {
                stack.push([node.right, path]);
                stack.push([node.left, path]);
            }
        }
    }

    return count;
}