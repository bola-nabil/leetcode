var amountOfTime = (root, start) => {
    let amount = 0;
    const traverse = (root, start) => {
        if (!root)
            return 0;

        let left = traverse(root.left, start);
        let right = traverse(root.right, start);

        if (root.val === start) {
            amount = Math.max(left, right);
            return -1;
        } else if (left >= 0 && right >= 0)
            return Math.max(left, right) + 1;
        else {
            amount = Math.max(amount, Math.abs(left - right));
            return Math.min(left, right) - 1;
        }
    }
    traverse(root, start)
    
    return amount;
};
