var getLastMoment = function(n, left, right) {
    let t = 0;
        if (left.length > 0) {
            t = Math.max(...left);
        }
        if (right.length > 0) {
            t = Math.max(t, n - Math.min(...right));
        }
        return t;
};