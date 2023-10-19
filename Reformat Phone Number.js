
// let answer = number.match(/\d/g).join("");
// if(answer.length === 2)
//     return(answer);
// else if(answer.length % 3 === 0)
//     return(answer.match(/\w{3}/g).join('-'));
// else if(answer.length % 4 === 0)
//         return(answer.match(/\w{2}/g).join('-'));
// else 
//     return(`${partOne}-${partTwo.match(/\w{2}/g).join('-')}`);

let number = "1-214";

let answer = number.match(/\d/g).join("");

if(answer.length === 2) console.log(answer);
else if(answer.length %3 === 0) console.log(answer.match(/\w{3}/g).join("-"));
else {
    console.log(answer.match(/\w{1,3}/g).join("-"));
}