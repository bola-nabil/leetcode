var minDeletionSize = function(strs) {
    const sortedCols = new Array(strs[0].length).fill(true);
    let count = 0;
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] < strs[j-1][i]){
                sortedCols[i] = false;
                break;
            }
        }
        if(!sortedCols[i]){
            count++;
        }
    }
    return count;
}