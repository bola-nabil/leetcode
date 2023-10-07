var sumOfUnique = function(nums) {
    let freq = {};
    
    nums.forEach(num => freq[num] = (freq[num] || 0) + 1)
    
    let sum = 0;
    
    for (let key in freq) {
        if (freq[key] === 1) {
            sum += (+key);
        }
    }
    
    return sum;
}