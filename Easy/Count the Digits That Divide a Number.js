var countDigits = function(num) {
    let convetToString = num.toString();
    let arr = convetToString.match(/\d/g);
    let result = 0;

    for(let i=0; i<arr.length; i++)
        if(num % +arr[i] === 0) result++;

    return(result);
};