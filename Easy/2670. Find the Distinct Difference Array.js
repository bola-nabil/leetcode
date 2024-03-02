var distinctDifferenceArray = function (nums) {
  const n = nums.length;
  const prefixCount = new Array(n);
  const sufffixCount = new Array(n);
  let set;

  set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(nums[i]);
    prefixCount[i] = set.size;
  }

  set = new Set();
  for (let i = n - 1; i >= 0; i--) {
    sufffixCount[i] = set.size;
    set.add(nums[i]);
  }

  const ans = new Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = prefixCount[i] - sufffixCount[i];
  }
  return ans;
};
