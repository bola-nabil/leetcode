var numIdenticalPairs = function(nums) {
    let count = {};
    let result = 0;

    for (let num of nums) {
        if (num in count) {
            result += count[num];
            count[num]++;
        } else {
            count[num] = 1;
        }
    }

    return result;
}