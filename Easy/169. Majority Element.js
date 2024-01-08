var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 0, n = nums.length, majorityEl = n / 2;
    if (n === 1)
        return nums[0];
    for (var i = 0; i < n - 1; i++) {
        if (nums[i] !== nums[i + 1])
            count = 0;
        else
            count++;
        if (count >= Math.floor(majorityEl))
            return nums[i];
    }
    return 0;
}