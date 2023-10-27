var missingNumber = function(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; ++i) {
        res ^= nums[i] ^ (i + 1);
    }
    return res;
};
