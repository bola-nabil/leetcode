var findJudge = function(n, trust) {
    const trusted = new Array(n+1).fill(0);
    for(let [i,j] of trust) {
        trusted[i] -=1;
        trusted[j] +=1;
    }
    for(let i=1; i<trusted.length; i++) {
        if((n-1) === trusted[i])
            return i;
    }
    return -1;
}