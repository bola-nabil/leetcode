var decompressRLElist = function(nums) {
    const output = [];
    
    for (let i = 0; i < nums.length; i+=2) {
        output.push(...Array(nums[i]).fill(nums[i+1]));
    }
    
    return output;
};