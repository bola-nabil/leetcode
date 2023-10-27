var arithmeticTriplets = function(nums, diff) {
    let obj = {};
    let res = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] >= diff*2){
            if(obj[nums[i]-diff] && obj[nums[i] - diff*2]){
                res++
            }
        } 
        obj[nums[i]] = true;
    }
    return res;
};