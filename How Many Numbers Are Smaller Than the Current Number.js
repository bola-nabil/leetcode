var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const hash = {};

  return nums.map((n) => {
    // DP memoization implementation
    if (!(n in hash)) {
      hash[n] = sorted.indexOf(n);
    }
    return hash[n];
  });
};