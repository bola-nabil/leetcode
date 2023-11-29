var isPrefixOfWord = function(sentence, searchWord) {
    let words = sentence.match(/\w+/g);
    let result = 0;
    for(let i=0; i<words.length; i++) {
        if(words[i].startsWith(searchWord)) {
            result = i + 1;
            break;
        }
        result = -1;
    }
    return(result);
};