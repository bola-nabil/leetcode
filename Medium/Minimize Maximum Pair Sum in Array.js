var minPairSum = function(nums) {
    let max = -Infinity;
    let min = Infinity;
    let hash = Array(100001).fill(0);
    for (const num of nums) {
        hash[num]++;
        max = Math.max(max, num);
        min = Math.min(min, num);
    }
    let low = min;
    let high = max;
    max = -Infinity;
    while (low <= high) {
        if (hash[low] === 0) low++;
        else if (hash[high] === 0) high--;
        else {
            max = Math.max(max, low + high);
            hash[low]--;
            hash[high]--;
        }
    }

    return max;
};