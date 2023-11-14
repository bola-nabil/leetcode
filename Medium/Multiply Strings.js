var multiply = function(num1, num2) {
    let bigNum1 = BigInt(num1);
    let bigNum2 = BigInt(num2);
    const result = bigNum1 * bigNum2;
    return(result.toString());
};