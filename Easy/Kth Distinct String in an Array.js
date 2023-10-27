var kthDistinct = function(arr, k) {
    let obj = {};
    let count = 0;
    for(let i = 0; i < arr.length; i++){
            obj[arr[i]] = obj[arr[i]] + 1 || 1
    }
    for(let j = 0; j < arr.length; j++){
        if(obj[arr[j]] == 1 ){
            count++
            if(count == k){
                return arr[j]
            }  
        } 
    }
    if(count != k){
        return ""
    }
};