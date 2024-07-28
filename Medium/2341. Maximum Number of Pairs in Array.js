var numberOfPairs = function(nums) {
    let countMap = new Map();
    
    for (let num of nums) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }
    
    let pairs = 0;
    let leftovers = 0;
    
    for (let count of countMap.values()) {
        pairs += Math.floor(count / 2);
        leftovers += count % 2;
    }
    
    return [pairs, leftovers];
};
