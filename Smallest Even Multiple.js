var smallestEvenMultiple = function(n) {
    let result = 1
    while(result % 2 !== 0 || result % n !== 0 ) result ++
    return result
};