function isSelfDividingNumber(num) {
    const digits = Array.from(String(num), Number);

    for (const digit of digits) {
        if (digit === 0 || num % digit !== 0) {
        return false;
        }
    }
    return true;
}
var selfDividingNumbers = function(left, right) {
    const result = [];

    for (let num = left; num <= right; num++) {
        if (isSelfDividingNumber(num)) {
        result.push(num);
        }
    }

    return result;
}