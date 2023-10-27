var targetIndices = function(nums, target) {
    let output = [];
    nums.sort(function(a, b){return a - b});
    for(let i=0; i<nums.length; i++) {
        if(nums[i] == target)
            output.push(i);
    }
    return output;
};