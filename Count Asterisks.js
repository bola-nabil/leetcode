var countAsterisks = function(s) {
    let pair=0, count=0;
    for(let c of s){
        if(c == '|')    pair++;
        if(pair % 2 == 0 && c == '*')    count++;
    }
    return count;
};