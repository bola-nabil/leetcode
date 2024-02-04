var checkAlmostEquivalent = function(word1, word2) {
    var mp = new Array(26).fill(0);
    for(let i=0; i < word1.length;i++){
        let index = word1.charCodeAt(i)-97;
        mp[index]++;
    }
    for(let i=0; i < word2.length;i++){
        let index = word2.charCodeAt(i)-97;
        mp[index]--;
    }
    for(let i=0;i<26;i++){
        if(Math.abs(mp[i])>3)
            return false;
    }
    return true;
};