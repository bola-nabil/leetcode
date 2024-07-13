var minOperations = function(nums) {
    let oper = 0;
    let filp = 0;

    for(let i=0; i<nums.length; i++) {
        let currState = (filp % 2 === 0) ? nums[i] : 1 - nums[i];
        if(currState === 0) {
            oper++;
            filp++;
        }
    }
    return oper;
};
