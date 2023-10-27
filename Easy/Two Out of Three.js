var twoOutOfThree = function(nums1, nums2, nums3) {
    let set = new Set(nums1), res = new Set();
    nums1 = new Set();
    
    for(let num of nums2) {
        if(set.has(num)) res.add(num);
        nums1.add(num);
    }
    
    for(let num of nums3) {
        if(set.has(num) || nums1.has(num)) res.add(num);
    }
    
    return [...res];
};