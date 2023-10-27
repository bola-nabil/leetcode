var findDifference = function(nums1, nums2) {
    let ans1=new Set(nums1)
    nums2.forEach(v=>{ans1.delete(v)});
    let ans2=new Set(nums2);
    nums1.forEach(v=>{ans2.delete(v)});    
    return [[...ans1],[...ans2]];
};