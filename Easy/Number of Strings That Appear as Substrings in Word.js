var numOfStrings = function(patterns,word) {
    let count = 0;
    patterns.filter(function(e) {
        word.includes(e) === true ? count++ : 'null';
    });
    return count;
}