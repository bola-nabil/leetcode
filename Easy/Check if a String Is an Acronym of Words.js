var isAcronym = function(words, s) {
    let x = s.split("");
    let count = 0;
    
    if(words.length !== s.length) {
        return false;
    } else if (words.length === s.length) {
        for(let i=0; i<words.length; i++) {
            if(words[i].charAt(0) === x[i].charAt(0)) {
                count++;
            }
        }
        if(count === words.length) return true;
        else return false;
    }
};