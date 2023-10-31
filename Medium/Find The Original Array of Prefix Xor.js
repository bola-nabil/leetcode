var findArray = function(pref) {
    let result = [];
    for(let i=0; i<pref.length - 1; i++)
        result.push(pref[i] ^ pref[i+1]);
    
    result.unshift(pref[0]);
    return [...result];
};
