var capitalizeTitle = function(title) {
    let lower = title.toLowerCase();
    let words = lower.match(/\w+/g);
    let res = [];
    for(let i=0; i<words.length; i++) {
        if(words[i].length > 2) res.push(`${words[i].slice(0,1).toUpperCase()}${words[i].slice(1,)}`)
        else res.push(words[i]);
    }
    return res.join(" ");  
};