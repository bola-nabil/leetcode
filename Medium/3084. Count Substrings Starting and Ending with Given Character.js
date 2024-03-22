var countSubstrings = function(s, c) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c)
            count++
    }
    return ((count*(count+1))/2);
};
