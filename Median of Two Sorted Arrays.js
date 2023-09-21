var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [...nums1, ...nums2];

    if (arr.length == 0) {
        return; 
    }

    arr.sort((a, b) => a - b);
    const midpoint = Math.floor(arr.length / 2);
    const median = arr.length % 2 === 1 ?
      arr[midpoint] :
      (arr[midpoint - 1] + arr[midpoint]) / 2;
      
    return median;
};