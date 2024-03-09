var getCommon = function (nums1, nums2) {
  let counts = {};
  let repeatedNumbers = [];

  for (let num of nums1) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (counts[num] > 0) {
      repeatedNumbers.push(num);
      counts[num]--;
    }
  }

  if (repeatedNumbers.length === 0) return -1;
  else return repeatedNumbers[0];
};
