var arraySign = function(nums) {
    return nums.reduce((a, c) => a == 0 || c == 0 ? 0 : c < 0 ? a*-1 : a, 1);    
};