var leftRightDifference = function(nums) {
    let sumRight = nums.reduce((a,b) => a + b);
    let sumLeft = 0;
    const a = nums.slice(0, nums.length - 1);
    a.unshift(0)
    
    for(let i = 0; i < nums.length; i++){
        sumRight -= nums[i]
        sumLeft += a[i]
        a[i] = Math.abs(sumLeft - sumRight)
    }
    
    return a;
};