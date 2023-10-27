var sortArrayByParity = function(nums) {
    let evenArray = [];
    let oddArray = [];
    for(let i=0;i<nums.length;i++) {
        if(nums[i]%2 === 0) 
            evenArray.push(nums[i]);
        else 
            oddArray.push(nums[i]);
    }
    return([...evenArray, ...oddArray]);
};