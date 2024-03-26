var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let idx = nums[i]-1;
        if (i == idx || nums[i] == nums[idx]) continue;
        if (idx >= 0 && idx <= nums.length - 1) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            i--;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i+1 == nums[i]) continue;
        else return i+1;
    }
    
    return nums.length + 1;
}
