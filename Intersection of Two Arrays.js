var intersection = function(nums1, nums2) {
    let maxLenght = Math.max(nums1.length, nums2.length);
    let output = [];

    for(let i=0; i<maxLenght; i++) {
        for(let j=0; j<maxLenght; j++)
            if(nums1[j] === nums2[i]) output.push(nums1[j]);
    }
    let res = new Set(output);
    return([...res]);
};