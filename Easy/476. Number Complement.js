var findComplement = function(num) {
    let d = 2;
    while(d <= num) d *= 2;

    return (d - num - 1);
};
