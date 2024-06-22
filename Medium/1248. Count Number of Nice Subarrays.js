var numberOfSubarrays = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] %= 2;
    }
    
    let prefixCount = new Array(nums.length + 1).fill(0);
    prefixCount[0] = 1;
    let s = 0;
    let ans = 0;
    
    for (let num of nums) {
        s += num;
        if (s >= k) {
            ans += prefixCount[s - k];
        }
        prefixCount[s]++;
    }
    
    return ans;
};
