function rev(str) {
    let strReverse = str.split('').reverse().join("");
    return strReverse
}

var maximumNumberOfStringPairs = function(words) {
    let count = 0;
    for(let i=0; i<words.length; i++) {
        for(let j=i+1; j<words.length; j++)
            if(words[i] == rev(words[j])) count++;
    }

    return(count);   
};