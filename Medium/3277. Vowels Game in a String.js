var doesAliceWin = function(s) {
    for (let c of s) {
        if (isVowel(c)) {
            return true;
        }
    }
    return false;
};

function isVowel(c) {
    return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
};
