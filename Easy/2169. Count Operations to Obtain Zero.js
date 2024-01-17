var countOperations = function(num1, num2) {
    let countOperations = 0;
    let reminder = null;
    let factorial = null;
    while (num1 !== 0 && num2 !== 0) {
        if (num1 < num2) {
            reminder = num2 % num1;
            factorial = parseInt(num2 / num1);
            countOperations += factorial;
            num2 = reminder;
        } else {
            reminder = num1 % num2;
            factorial = parseInt(num1 / num2);
            countOperations += factorial;
            num1 = reminder;
        }
    }
    return countOperations;
};