var lengthOfLastWord = function(s) {
    let words = s.match(/\w+/g);
    let res = words[words.length-1].length;

    return(res);
};