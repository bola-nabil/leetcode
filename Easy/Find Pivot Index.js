var pivotIndex = function(nums) {
    let ls= 0, rs= nums.reduce((a,b) => a+b)-nums[0];
    if( ls === rs ) return 0;
    
    for(let i = 1; i < nums.length; i++ ) {
        ls += nums[i-1]; 
        rs -= nums[i]; 
        if( ls === rs ) return i;
    }
    
    return -1
};