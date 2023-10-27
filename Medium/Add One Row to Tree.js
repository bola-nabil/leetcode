var addOneRow = function(root, val, depth) {

    let queue=[root]
    let level=0

    if(depth===1){
        let newRoot=new TreeNode(val)
        newRoot.left=root
        return newRoot
    }

    while(queue.length>0){


        let n=queue.length
        level++
        while(n>0){
            
            let curr=queue.shift()
            n--
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
            let temp_left=curr.left
            let temp_right=curr.right
        
   if(level===depth-1){
       curr.left=new TreeNode(val)
       curr.right=new TreeNode(val)
       curr.left.left=temp_left
       curr.right.right=temp_right 
   }
        }
    }
return root
};