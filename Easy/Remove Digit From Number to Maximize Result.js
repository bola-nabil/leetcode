var removeDigit = function(number, digit) {
    let maxNumber = 0;
    for(let i=0; i<number.length; i++) {
        if(number[i] === digit) {
            const searchNumber = number.substring(0, i) + number.substring(i + 1);
            const num = BigInt(searchNumber);
            if(num > maxNumber) maxNumber = num
        }
    }

    return(maxNumber.toString()); 
};