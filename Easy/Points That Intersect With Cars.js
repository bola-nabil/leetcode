var numberOfPoints = function(nums) {
    let arr = [];

    for(let i=0; i<nums.length; i++) {
        let start = nums[i][0];
        let end = nums[i][1];
        for(let j=start; j<=end; j++) arr.push(j);
    }

    let uniqueNumber = new Set(arr).size;
    return(uniqueNumber);
};