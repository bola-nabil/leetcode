var isPossibleToSplit = function (nums) {
  if (nums.length % 2 !== 0) {
    return false;
  }

  const nums1 = new Set();
  const nums2 = new Set();

  for (const num of nums) {
    if (!nums1.has(num)) {
      nums1.add(num);
    } else if (!nums2.has(num)) {
      nums2.add(num);
    } else {
      return false;
    }
  }

  return nums1.size + nums2.size === nums.length;
};
