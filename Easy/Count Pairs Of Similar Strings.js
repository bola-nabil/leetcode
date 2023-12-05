function sortElement(str) {
    let uniqueChar = new Set(str);
    let res = [...uniqueChar].sort().join("");
    return res;
}

var similarPairs = function(words) {
    let count = 0;
    for(let i=0; i<words.length; i++) {
        for(let j = i+1; j<words.length; j++)
            if(sortElement(words[i]) == sortElement(words[j])) count++;
    }

    return count;
};