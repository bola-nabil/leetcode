var longestSquareStreak = function(nums) {
    let max=-1
    let set = new Set(nums)
    let setarr = Array.from(set.values())
    setarr.sort((a,b)=>a-b)
    for(let i=0;i<setarr.length;i++){
        let curr = setarr[i]
        let count=0
        while(set.has(curr)){
            set.delete(curr)
            curr=curr**2
            count++
        }
        max = Math.max(max,count)
        
    }
    return max>1?max:-1
};
