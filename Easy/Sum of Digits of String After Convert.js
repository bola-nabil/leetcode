var getLucky = function(s, k) {
    let numStr = "";
    for (let i=0;i<s.length;i++) {
        numStr += (s.charCodeAt(i) - 96).toString()
    }
    while (k > 0) {
        let sum = 0;
        for (let i=0; i<numStr.length; i++) {
            sum += Number(numStr[i]);
        }
        numStr = sum.toString();
        if(sum < 10) break;
        k--;
    }
    return numStr;
};