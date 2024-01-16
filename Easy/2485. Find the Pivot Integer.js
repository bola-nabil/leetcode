var pivotInteger = function(n) {
    let pivotNum = Math.sqrt((n*n+n) / 2);

    if(parseInt(pivotNum) === pivotNum)
        return(pivotNum);
    else
        return -1;  
};