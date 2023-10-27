var countConsistentStrings = function(allowed, words) {
    return words.filter(word => [...word].every(letter => allowed.includes(letter))).length;
};