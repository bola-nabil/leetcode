var arrayPairSum = function(nums) {
    nums = nums.sort((a,b) => a - b);
    let output = 0;
    
    for (let i = 0; i < nums.length; i++) {
        output += Math.min(nums[i], nums[i+1]);
        i++;
    }
    
    return output;
};