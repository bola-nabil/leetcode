var getEncryptedString = function(s, k) {
    let n = s.length;
    let str = '';

    for(let i=0; i<n; i++) {
        let newIndex = (i + k) % n;
        str += s[newIndex];
    }
    return str;
};
