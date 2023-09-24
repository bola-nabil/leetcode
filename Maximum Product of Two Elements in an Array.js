var maxProduct = function(nums) {
    const [max1, max2] = nums.sort((a, b) => b - a).slice(0, 2);
    return (max1 - 1) * (max2 - 1);
};