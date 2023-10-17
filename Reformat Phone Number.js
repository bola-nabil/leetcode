let x = "--333-333-333-333-333-333-33 ";

// let answer = number.match(/\d/g).join("");
// if(answer.length === 2)
//     return(answer);
// else if(answer.length % 3 === 0)
//     return(answer.match(/\w{3}/g).join('-'));
// else if(answer.length % 4 === 0)
//         return(answer.match(/\w{2}/g).join('-'));
// else 
//     return(`${partOne}-${partTwo.match(/\w{2}/g).join('-')}`);

var reformatNumber = function(number) {
    let answer = number.match(/\d/g).join("");
    let cal = (Math.trunc(answer.length/3));
    let total = (cal*2) + 1;
    let partOne = answer.slice(0,total);
    let partTwo = answer.slice(total);

    if(answer.length === 2)
        return(answer);
    else if(answer.length % 3 === 0)
        return(answer.match(/\w{1,3}/g).join('-'));
    else if(answer.length % 4 === 0)
            return(answer.match(/\w{2}/g).join('-'));
    else 
        return(`${partOne.match(/\w{1,3}/g).join('-')}|${partTwo.match(/\w{2}/g)}`);
};


console.log(reformatNumber(x));