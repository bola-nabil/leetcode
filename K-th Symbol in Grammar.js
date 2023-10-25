var kthGrammar = function (n, k) {
    if (n === 1) {
        return 0;
    }
    
    if (n === 2) {
        if (k === 1) {
            return 0;
        }
        
        if (k === 2) {
            return 1;
        }
    }
    
    const index = k % 2;
    const prevK = Math.ceil(k / 2);
    const prevBit = kthGrammar(n - 1, prevK);
    
    return Math.abs(prevBit - index ? 0 : 1);    
}