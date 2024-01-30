var hammingDistance = function(x, y) {
    let count = 0;
    for(let i=31; i>=0; i--) {
        let first = (x & (1<<i));
        let second = (y & (1<<i));
        if(first !== second)
            count++;
    }
    return count;
};