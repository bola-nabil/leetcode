var longestCommonPrefix = function(arr) {
    let i = 1;
    let prefix = arr[0];
    
    while(i < arr.length) {
        if(!arr[i].startsWith(prefix))
            prefix = prefix.slice(0, -1);
        else
            i++;
    }
    return prefix;
}