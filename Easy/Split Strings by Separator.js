var splitWordsBySeparator = function(words, separator) {
    return words.join(separator).split(separator).filter(Boolean)
};