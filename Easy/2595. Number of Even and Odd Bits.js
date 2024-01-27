var evenOddBit = function(n) {
    let binaryNum = n.toString(2), arr = [0,0];

    for (let i = binaryNum.length - 1, cur = 0; ~i; i--, cur ^= 1) {
        if (binaryNum[i] == '1')
            cur ? arr[1]++ : arr[0]++;
    }

    return arr;  
};