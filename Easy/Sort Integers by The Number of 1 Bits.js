var sortByBits = function(arr) {
    return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
};

const bitCount = num => {
    let sum = 0;
    while (num) {
        sum += num & 1;
        num = num >> 1;
    }
    return sum;
};