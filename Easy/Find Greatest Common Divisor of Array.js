var findGCD = function(nums) {
    let minNumber = Math.min(...nums);
    let maxNumber = Math.max(...nums);

    let result = [];

    for(let i=1; i<=minNumber; i++) {
        if(minNumber % i === 0 && maxNumber % i === 0)
            result.push(i);
    }

    return(Math.max(...result));
};