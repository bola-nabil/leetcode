var reverseWords = function(s) {
    let str = s.match(/\w+/g);
    let result = str.reverse().join(" ");

    return result;  
};