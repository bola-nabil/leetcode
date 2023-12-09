var reverseOnlyLetters = function(s) {
    const l = s.split``.filter(v=>/[a-zA-Z]/.test(v))
    const arr = []
    for (let i=0;i<s.length;i++){
        if (/[a-zA-Z]/.test(s[i])) arr.push(l.pop());
        else arr.push(s[i]);
    }
    return arr.join``;
};