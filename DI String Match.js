var diStringMatch = function(s) {
    const output = [];
    let countI = 0;
    let countD = s.length;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            output.push(countI);
            countI++;
        } else {
            output.push(countD);
            countD--;
        }
    }
    
    output.push(s[s.length - 1] === "I" ? countD : countI);
    
    return output;
}