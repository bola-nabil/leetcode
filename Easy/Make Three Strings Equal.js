var findMinimumOperations = function (s1, s2, s3) {
    let n1 = s1.length, n2 = s2.length, n3 = s3.length, i;
    for (i = 0; i < Math.min(n1, n2, n3); i++) {
        let e1 = s1[i], e2 = s2[i], e3 = s3[i];
        if (e1 !== e2) break;
        if (e2 !== e3) break;
    }
    if (i === 0) return -1;
    return (n1 - i) + (n2 - i) + (n3 - i);
};