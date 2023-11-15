function commonFactors(num1, num2) {
    const factorsNum1 = findFactors(num1);
    const factorsNum2 = findFactors(num2);
    const commonFactors = factorsNum1.filter(factor => factorsNum2.includes(factor));
    return commonFactors.length;
}

function findFactors(number) {
    const factors = [];
    const sqrt = Math.sqrt(number);

    for (let i = 1; i <= sqrt; i++) {
        if (number % i === 0) {
            factors.push(i);
            if (number / i !== i) {
                factors.push(number / i);
            }
        }
    }
    return factors;
}