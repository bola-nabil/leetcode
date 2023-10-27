var areNumbersAscending = function(s) {
    let numberOfArray = s.match(/\d{1,2}/ig);
    let output;
    for(let i=0; i<numberOfArray.length; i++) {
        if(numberOfArray[i+1] - numberOfArray[i] <= 0){
            output = false;
            break;
        }
        else
            output = true;
    }
    return output;
};