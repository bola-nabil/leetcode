function reorderSpaces(text) {
    const words = text.trim().split(/\s+/g);
    const spaces = text.length - words.join('').length;
    if(words.length <= 1){
        return words[0] + ' '.repeat(spaces);
    }
    const spaceEachWord = Math.floor(spaces / (words.length - 1));
    const spaceRemainer = spaces % (words.length - 1);
    return words.join(' '.repeat(spaceEachWord)) + ' '.repeat(spaceRemainer);
};