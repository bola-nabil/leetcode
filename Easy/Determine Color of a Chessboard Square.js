var squareIsWhite = function(coordinates) {
    let char = coordinates[0];
    let num = coordinates[1];

    if((char === 'a' || char === 'c' || char === 'e' || char === 'g') && +(num) % 2 == 0)
        return(true);
    else if((char === 'b' || char === 'd' || char === 'f' || char === 'h') && +(num) % 2 != 0)
        return(true)
    else
        return(false);
};