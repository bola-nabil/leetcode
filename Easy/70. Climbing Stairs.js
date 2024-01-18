var climbStairs = function(n) {
    if(n < 3)
        return n;
    let a = 0, b = 1;
    for(let i=0; i<n; i++) {
        b = a + b;
        a = b - a;
    }
    return b;
};
