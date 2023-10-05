var countPrefixes = function(words, s) {
    let result = words.filter(element => s.startsWith(element)).length;
    return(result);
};