/**
 * @param {TreeNode} root
 * @param {number} targetSum
 */
const hasPathSum = (root, targetSum) => {
    return helper(root, targetSum, 0);
};

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @param {number} currentSum
 */
const helper = (root, targetSum, currSum) => {
    if(!root) {
        return false;
    }
    else if(!root.left && !root.right) {
        return root.val + currSum === targetSum;
    }

    const left = helper(root.left, targetSum, root.val + currSum);
    const right = helper(root.right, targetSum, root.val + currSum);

    return left || right;
};