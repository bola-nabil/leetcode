var countSubarrays = function(nums, k) {
    let n = nums.length;
    let maxi = Math.max(...nums);
    let i = 0, j = 0, cnt = 0, ans = 0;

    for (j = 0; j < n; j++) {
        if (nums[j] === maxi) {
            cnt++;
        }
        if (cnt >= k) {
            for (; cnt >= k; i++) {
                ans += n - j;
                if (nums[i] === maxi) {
                    cnt--;
                }
            }
        }
    }
    return ans;
};
