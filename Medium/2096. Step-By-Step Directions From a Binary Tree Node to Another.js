var getDirections = function(root, startValue, destValue) {
  const lca = findLCA(root, startValue, destValue) 
  const depth = findDepth(lca, startValue) 
  const path = findPath(lca, destValue)
  return 'U'.repeat(depth).concat(path)
};

function findLCA(root, s, d){
  if(!root) return null
  if(root.val === s || root.val === d) return root
  const left = findLCA(root.left, s, d)
  const right = findLCA(root.right, s, d)
  if(left && right)
    return root
  return left || right
} 

function findDepth(root, val, count=0){
  if(!root) return 0  
  if(root.val === val) return count
  return findDepth(root.left, val, count+1) ||
         findDepth(root.right, val, count+1)
}

function findPath(root, val, str=''){
  if(!root) return ''
  if(root.val === val) return str
  return findPath(root.left, val, str+'L') ||
         findPath(root.right, val, str+'R')
};
