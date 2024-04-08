function revreseNumber(n) {
    let reverseNum = n.toString().split('').reverse().join("");
    return +reverseNum;
}

var countDistinctIntegers = function(nums) {
    let editNums = [], arr = [];

    for (let i = 0; i < nums.length; i++) {
        let n = revreseNumber(nums[i]);
        editNums.push(n);
    }

    arr = nums.concat(editNums);

    let unquieNums = new Set(arr);

    return unquieNums.size;
}
