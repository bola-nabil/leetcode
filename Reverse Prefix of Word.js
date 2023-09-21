var reversePrefix = function(word, ch) {
    let count = word.indexOf(ch);
    let cutStr = word.slice(0,count+1).split("").reverse();
    return (`${cutStr.join("")}${word.slice(count+1)}`);
};