var makeGood = function(s) {
    let checkGoodStr = false;
    let array = s.split("");
    let count = 0;
        
    while (checkGoodStr === false) {
        if (array.length === 1) checkGoodStr = true;
        
        for (let i = 0; i < array.length - 1; i++) {
            if (Math.abs(array[i].charCodeAt(0) - array[i + 1].charCodeAt(0)) === 32) {
                array.splice(i, 2);
                checkGoodStr = false;
                count++;
                break;
            }
        }
        
        if (count === 0)
            checkGoodStr = true;
        else
            count = 0;
    }

    return array.join("");
};