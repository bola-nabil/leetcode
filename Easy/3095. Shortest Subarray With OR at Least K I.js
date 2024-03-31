var minimumSubarrayLength = function(nums, k) {
    const n = nums.length;
  let minLen = Infinity;

  for (let i = 0; i < n; i++) {
    let orValue = 0;
    for (let j = i; j < n; j++) {
      orValue |= nums[j];
      if (orValue >= k) {
        minLen = Math.min(minLen, j - i + 1);
        break;
      }
    }
  }

  return minLen === Infinity ? -1 : minLen;
 
};
