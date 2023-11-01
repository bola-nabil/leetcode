var subtractProductAndSum = function(n) {
    let covertToString = n.toString();
    let digitNumbers = covertToString.match(/\d/g);
    let product = 1, sum = 0;

    for(let i=0; i<digitNumbers.length; i++) {
        product *= +digitNumbers[i];
        sum += +digitNumbers[i];
    }

    return(product - sum);
};