var mergeAlternately = function(word1, word2) {
    let i =  0 
    let res = ""
    while(i < Math.max(word1.length, word2.length)){
        if(word1[i]) res+=word1[i]
        if(word2[i]) res+=word2[i]

        i++
    }
    return res 
};