var secondHighest = function(s) {
    let nums = s.match(/\d/g);
    if(nums === null) return(-1);
    else {
        let dightNums = nums.map((e) => +e);
        dightNums.sort();
        let unqueNums = new Set(dightNums);
        let res = ([...unqueNums][unqueNums.size-2]);
        if(res === undefined) return(-1);
        else return(res);
    } 
};