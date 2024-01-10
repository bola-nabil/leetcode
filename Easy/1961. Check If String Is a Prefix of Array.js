var isPrefixString = function(s, words) {
    let prefixWord = '';

    for (let i = 0; i < words.length; i++) {
        prefixWord += words[i];
        if (prefixWord === s)
            return true;
    }

    return false;
};
