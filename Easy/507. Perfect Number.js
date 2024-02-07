function findPositiveDivisors(number) {
    const divisors = [];
    
    for (let i = 1; i <= Math.sqrt(number) ; i++) {
        if (number % i === 0) {
            divisors.push(i);
            
            if (i !== Math.sqrt(number)) {
                divisors.push(number / i);
            }
        }
    }
    divisors.sort((a, b) => a - b);
    divisors.pop();
    return divisors;
}

var checkPerfectNumber = function(num) {
    let divisors = findPositiveDivisors(num);
    let perfectNumber = 0;
    for(let i=0; i<divisors.length; i++)
        perfectNumber+=divisors[i];

    if(perfectNumber === num)
        return true;
    else
        return false;
};