var maximumValue = function(strs) {
    let arr1 = [], arr2 = [];
    for(let i=0; i<strs.length; i++) {
        if(strs[i] != +strs[i]) arr1.push(strs[i].length);
        else if(strs[i] == +strs[i]) arr2.push(strs[i]);
    }

    let arr = arr1.concat(arr2);
    let res = Math.max(...arr)

    return(res);
};