var incremovableSubarrayCount = function(nums) {
    let ans = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let ok = true;
            let lst = -1;

            for (let k = 0; k < n; k++) {
                if (k >= i && k <= j) {
                    continue;
                } else {
                    ok &= lst < nums[k];
                    lst = nums[k];
                }
            }

            ans += ok ? 1 : 0;
        }
    }
    return ans;
}
