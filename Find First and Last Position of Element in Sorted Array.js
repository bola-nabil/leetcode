var searchRange = function(nums, target) {
    let startingPositon = nums.indexOf(target);
    let endingPositon = nums.lastIndexOf(target);
    return [startingPositon, endingPositon];
};
