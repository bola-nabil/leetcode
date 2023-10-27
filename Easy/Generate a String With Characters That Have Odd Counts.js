var generateTheString = function(n) {
    let charOne = 'b', charTwo = 'a';
    if(n % 2 === 0) 
        return(charOne.repeat(n-1) + charTwo);
    else 
        return(charOne.repeat(n));
};