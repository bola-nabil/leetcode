var nthUglyNumber = function(n) {
    if (!n) return 0;
    
    let i2 = 0, i3 = 0, i5 = 0;
    let out = [1];
    
    while (!out[n-1]) { 
        let c2 = out[i2] * 2;
        let c3 = out[i3] * 3;
        let c5 = out[i5] * 5;
        let next = Math.min(Math.min(c2, c3), c5);
        out.push(next);
        
        if (next === c2) i2++;
        if (next === c3) i3++;
        if (next === c5) i5++;
    }

    return out[n-1]; 
};
