var longestNiceSubstring = function(s) {
    if (s.length < 2) return "";
    const set = new Set();
    for (const str of s) set.add(str);

    for (let i = 0; i <= s.length - 1; i++) {
        const upperStr = s[i].toUpperCase();
        const lowerStr = s[i].toLowerCase();
        if (set.has(upperStr) && set.has(lowerStr)) continue; 
        var str1=longestNiceSubstring(s.substring(0,i));
        var str2=longestNiceSubstring(s.substring(i+1));
        return str1.length >= str2.length ? str1 : str2;
    }
    return s; 
};
