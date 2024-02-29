var sumCounts = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let a = new Set([nums[i]]);
    for (let j = i; j < nums.length; j++) {
      a.add(nums[j]);
      ans += a.size ** 2;
    }
  }
  return ans;
};
