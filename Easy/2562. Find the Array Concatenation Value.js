var findTheArrayConcVal = function (nums) {
    let concatNums = [];
    while (nums.length >= 1) {
        let firstElement = nums[0];
        let lastElement = nums[nums.length - 1];

        let concatStr = firstElement + "" + lastElement;

        if (nums.length === 1) concatNums.push(firstElement.toString());
        else concatNums.push(concatStr);

        nums.shift();
        nums.pop();
    }

    let result = 0;
    for (let i = 0; i < concatNums.length; i++) {
        result += +concatNums[i];
    }

    return result;
};
