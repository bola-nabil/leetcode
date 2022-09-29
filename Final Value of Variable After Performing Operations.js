var finalValueAfterOperations = function(operations) {
    let result = 0;
    for(let i=0;i<operations.length;i++) {
        if(operations[i] == "--X") --result;
        if(operations[i] == "X--") result--;
        if(operations[i] == "++X") ++result;
        if(operations[i] == "X++") result++;
    }
    return result;
};
