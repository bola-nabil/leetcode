var distributeCandies = function (c, n) {
    let j = 0;
    let left = c;
    const arr = [];
    for (let i = 0; i < n; i++) arr[i] = 0;
    for (let i = 1; i < c + 1; i++) {
        if (i > left) {
            arr[j] += left;
            break;
        }
        arr[j] += i;
        j++;
        if (j === n) j = 0;
        left -= i;
    }
    return arr;
};