var earliestSecondToMarkIndices = function (nums, changeIndices) {
  changeIndices = changeIndices.map((index) => index - 1);
  let n = nums.length;
  let low = 0,
    high = changeIndices.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (isPossible(mid)) high = mid;
    else low = mid + 1;
  }
  return isPossible(low) ? low + 1 : -1;

  function isPossible(s) {
    let last = Array(n).fill(-1);
    for (let i = 0; i <= s; i++) {
      last[changeIndices[i]] = i;
    }
    let marked = 0,
      operations = 0;
    for (let i = 0; i <= s; i++) {
      if (i === last[changeIndices[i]]) {
        if (nums[changeIndices[i]] > operations) return false;
        operations -= nums[changeIndices[i]];
        marked++;
      } else {
        operations++;
      }
    }
    return marked === n;
  }
};
