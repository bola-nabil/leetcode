var maximumScore = function(nums, k) {
    let res = nums[k];
    let left = k;
    let right = k;
    let minVal = nums[k];
    let n = nums.length;
    while (left > 0 || right < n - 1) {
        if ((left === 0) || (right < n - 1 && nums[left - 1] < nums[right + 1])) {
            right++;
            minVal = Math.min(minVal, nums[right]);
        } else {
            left--;
            minVal = Math.min(minVal, nums[left]);
        }
        res = Math.max(res, minVal * (right - left + 1));
    }
    return res;
};