var differenceOfSum = function(nums) {
    let sumElement = 0;

    for(let i=0; i<nums.length; i++) sumElement+= nums[i];

    let convertToString = nums.join(" ");
    let digitNumbers = convertToString.match(/\d/g);
    let sumDigits = 0;

    for(let i=0; i<digitNumbers.length; i++) sumDigits+= +digitNumbers[i];

    return(Math.abs(sumElement - sumDigits));
};