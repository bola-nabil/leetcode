var checkIfPangram = function(sentence) {
    let check = new Set(sentence);
    return check.size === 26 ? true : false;
};