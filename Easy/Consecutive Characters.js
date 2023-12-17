var maxPower = function(s) {
    let output = 1;
    let currentPower = 1;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            currentPower++;
        } else {
            output = Math.max(output, currentPower);
            currentPower = 1;
        }
    }
    
    return output;
};