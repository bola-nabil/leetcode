var countGoodSubstrings = function(s) {
    let goodStr = 0;
    for(let i=0; i<s.length - 2; i++) {
        const subStr = s.slice(i,i+3);
        const uniqueChar = new Set(subStr);

        uniqueChar.size === 3 && (goodStr++);
    }

    return goodStr;
};