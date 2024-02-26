var sumIndicesWithKSetBits = function (nums, k) {
  let n = nums.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let binaryStr = i.toString(2).replaceAll("0", "");
    if (binaryStr.length === k) 
        sum += nums[i];
  }
  return sum;
};
