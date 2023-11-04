var minimumSum = function(num) {
    num = num.toString().split('').sort()
    new1 = num[0] + num[2]
    new2 = num[1] + num[3]
    return Number(new1) + Number(new2)
};