var relativeSortArray = function(arr1, arr2) {
    const hasmap = new Map();
    
    for (let i = 0 ; i < arr2.length; i++)
        hasmap.set(arr2[i], i);
    
    return arr1.sort((a,b) => (!hasmap.has(a) ? arr1.length + a : hasmap.get(a)) - (!hasmap.has(b) ? arr1.length + b : hasmap.get(b)));
};