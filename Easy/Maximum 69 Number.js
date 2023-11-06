var maximum69Number  = function(num) {
    let convertToString = num.toString();
    let res = convertToString.replace('6','9');
    return(+res);
};