var detectCapitalUse = function(word) {
    let capitalWord = word.toUpperCase();
    let lowerWord = word.toLowerCase();
    let firstLetter = word[0].toUpperCase();
    let nextLetters = word.slice(1).toLowerCase();
    let totalWord = firstLetter + nextLetters;

    if(word === capitalWord || word === lowerWord || totalWord === word) return(true);
    else return(false);
};