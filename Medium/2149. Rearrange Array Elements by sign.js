var rearrangeArray = function (nums) {
  let postiveNums = [],
    negativeNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) postiveNums.push(nums[i]);
    else negativeNums.push(nums[i]);
  }

  let output = [];
  for (let i = 0; i < postiveNums.length; i++) {
    output.push(postiveNums[i], negativeNums[i]);
  }

  return output;
};
