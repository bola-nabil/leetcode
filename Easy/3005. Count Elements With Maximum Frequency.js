var maxFrequencyElements = function(nums) {
    const freq = new Array(101).fill(0);
    
    for(const num of nums) 
        freq[num]++;
    
    freq.sort((a, b) => b - a);
    let max = freq[0],  i = 1;
    
    while(i < freq.length && freq[i] === max)
        i++;
    
    return i * max;
};
