var findIntersectionValues = function (nums1, nums2) {
  const value1 = nums1.reduce((sum, value) => nums2.includes(value) ? ++sum : sum, 0);
  const value2 = nums2.reduce((sum, value) => nums1.includes(value) ? ++sum : sum, 0);
  return [value1, value2];
};
