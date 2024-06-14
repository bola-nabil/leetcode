var minIncrementForUnique = function(nums) {
    nums.sort((a, b) => (a - b))
    let mincount = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            nums[i] += 1
            mincount++
        }
        else if (nums[i] < nums[i - 1]) {
            let diff = Math.abs(nums[i] - nums[i - 1])
            nums[i] += diff + 1
            mincount += diff + 1
        }
    }
    return mincount
};
