var shuffle = function(nums, n) {
    let newArray = [], x=0;
    for(let i=0;i<n;i++) {
        newArray.push(nums[i]);
        newArray.push(nums[n+i]);
    }
    return newArray;
};