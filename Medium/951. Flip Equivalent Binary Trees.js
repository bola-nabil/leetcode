var flipEquiv = function(root1, root2) {
    if (root1 == null && root2 == null) return true;
    if (root1 == null || root2 == null) return false;
    if (root1.val != root2.val) return false;
    
    const regular = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
    const flipped = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);
  
    return regular || flipped;
};
