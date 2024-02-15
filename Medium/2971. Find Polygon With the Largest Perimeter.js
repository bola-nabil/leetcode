var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    if (i >= 2 && sum > nums[i]) {
      max = sum + nums[i];
    }
    sum += nums[i];
  }

  return max;
};
