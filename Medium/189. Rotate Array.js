var rotate = function (nums, k) {
    for (let i = nums.length - 1; i >= 0; i--)
        nums[i + k] = nums[i];

    for (let j = k - 1; j >= 0; j--)
        nums[j] = nums.pop();
};