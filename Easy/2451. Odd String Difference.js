var oddString = function(words) {
    let hashMap = {};
    for(let word of words){
        let temp = '';

        for(let i =0;i<word.length-1;i++)
            temp+=word[i+1].charCodeAt(0)-word[i].charCodeAt(0)+'_';

        hashMap[temp] = hashMap[temp] ? [...hashMap[temp],word]:[word];
    }
    for(value of [...Object.values(hashMap)])
        if(value.length===1) return value[0];
};