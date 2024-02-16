var findLeastNumOfUniqueInts = function(arr, k) {
    let mp = new Map();
    for (let a of arr) {
        mp.set(a, (mp.get(a) || 0) + 1);
    }
    
    let v = Array.from(mp.values());
    let cnt = 0;
    v.sort((a, b) => a - b);
    for (let i = 0; i < v.length; i++) {
        if (k > v[i]) {
            k -= v[i];
            v[i] = 0;
        } else {
            v[i] -= k;
            k = 0;
        }
        if (v[i] !== 0) cnt++;
    }
    return cnt;
};
