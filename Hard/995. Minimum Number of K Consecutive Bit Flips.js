var minKBitFlips = function (nums, k) {
  let result = 0,
    windowStart = 0,
    flip = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if (windowEnd - windowStart + 1 >= k && nums[windowEnd - k] === 2) {
      flip -= 1;
      windowStart += 1;
    }
    if (flip % 2 === nums[windowEnd]) {
      if (windowEnd + k > nums.length) return -1;
      result += 1;
      flip += 1;
      nums[windowEnd] = 2;
    }
  }
  return result;
};
