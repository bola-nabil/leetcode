var findErrorNums = function(nums) {
    let res = [];

    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num))
            res.push(num);
        else
            seen.add(num);
    }
    nums.sort((a,b) => (a - b));

    let setNums = new Set(nums);
    let arr = [...setNums]
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== i+1){
            res.push(i+1);
            break;
        }
    }

    if(res.length === 2)
        return(res);
    else {
        res.push(arr.length + 1);
        return(res);
    }
};