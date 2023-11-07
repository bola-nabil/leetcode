var isSameAfterReversals = function(num) {
    const regex = /.*[^0]$/;

    if (regex.test(num) || num * 1 === 0) return(true);
    else return(false);
};