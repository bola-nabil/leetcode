var maximizeSum = function(nums, k) {
    let maxNum = Math.max(...nums);
    let sum = 0;
    for(let i=1; i<=k - 1 ; i++)
        sum+=maxNum + i;

    return(maxNum + sum);
};