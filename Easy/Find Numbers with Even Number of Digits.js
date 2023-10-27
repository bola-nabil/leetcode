var findNumbers = function(nums) {
    let res = nums.filter(function(e) {
    return e.toString().length %2 === 0;
    }).length;
    return res;
};