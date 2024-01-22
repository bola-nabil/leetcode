var hasTrailingZeros = function(nums) {
    let count = 0;

    for(const num of nums) {
        if(num % 2 === 0) {
            count++;
        if(count > 1)
            return true;
        }
    }
    return false;
};