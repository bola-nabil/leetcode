var lastVisitedIntegers = function (nums) {
    let seen = [], ans = [], k = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != -1) {
            seen.unshift(nums[i])
        }
        else {
            if (nums[i] != nums[i - 1])
                k = 1;
            if (seen.length >= k) {
                ans.push(seen[k - 1])
                k++;
            } else {
                ans.push(nums[i])
            }
        }
    }
    return ans;
};
