var returnToBoundaryCount = function(nums) {
    let count = 0, sum = 0;

    for(let i=0; i<nums.length; i++) {
        sum+=nums[i];
        if(sum === 0) count++;
    }
    return count;
};