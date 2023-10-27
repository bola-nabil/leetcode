var repeatedCharacter = function(s) {
    const set = new Set();
    for (let i = 0; i < s.length; i += 1) {
        const currentLetter = s[i]
        if(set.has(currentLetter)) {
             return currentLetter 
        }
        set.add(currentLetter);
    }
};