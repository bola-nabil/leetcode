var nextGreaterElement = function (findNums, nums) {
  return findNums.map((n) => {
    let found = nums.indexOf(n);

    if (found !== -1) {
      while (nums[++found] < n);
      if (found >= nums.length) found = -1;
      else found = nums[found];
    }

    return found;
  });
};
