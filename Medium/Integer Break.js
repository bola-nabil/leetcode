var integerBreak = function (n) {
    if (n < 4) return n - 1
    let out = 1;
    
    while (n) {
        if (n > 4) { 
            n = n - 3;
            out = out * 3;
        }
        else if (n === 4) {
            out = out * 4;
            break;
        } else if (n === 3) {
            out = out * 3;
            break;
        } else {
            out = out * 2;
            break;
        }
    }
    return out
}