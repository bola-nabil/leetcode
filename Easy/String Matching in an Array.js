var stringMatching = function(words) {
    let result = words.filter(n => words.some(h => h !== n && h.includes(n)));
    return result;
};