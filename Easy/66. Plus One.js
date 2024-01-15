var plusOne = function(digits) {
    var len =  digits.length;
    var num;
    var add = 1;

    for(let i = len-1;i>=0;i--)
    {
        num = digits[i]+add;
        if(num == 10)
            digits[i] = 0;
        else
        {
            digits[i] = num;
            return digits;
        }
    }

    digits.unshift(1);
    return digits;
}