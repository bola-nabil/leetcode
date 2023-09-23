var smallestEqual = function(nums) {
    for(let i = 0; i < nums.length; i++)
    {
       if(nums[i] % 10 === i % 10)
            return i; 
    }
    return -1;
};