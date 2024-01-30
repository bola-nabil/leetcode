var maximumCount = function(nums) {
    let postiveNumbers = nums.filter(e => e > 0).length;
    let nagtiveNumbers = nums.filter(e => e < 0).length;

    return(Math.max(postiveNumbers, nagtiveNumbers));
};