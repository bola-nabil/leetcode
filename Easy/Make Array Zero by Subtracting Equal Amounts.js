var minimumOperations = function(nums) {
    nums.sort((a,b)=>a-b);
    let count = 0;
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        if(!nums[i]) continue;
        if(nums[i]){
            if(nums[i]-sum>0){
                count++;
                sum+=nums[i]-sum;
            }
            nums[i] = nums[i]-sum;
        }
    }
    return count;
}