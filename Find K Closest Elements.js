var findClosestElements = function(arr, k, x) {
    let low = 0, high = arr.length-1;
    const answer = []
    
    while(low < high) {
        const mid = Math.floor((low + high) / 2);
        
        if(arr[mid] >= x) high = mid;
        else low = mid + 1
    }

    high = low;
    low--;
    
    while(low >= 0 && high < arr.length && answer.length < k) {
        const lowDiff = Math.abs(arr[low] - x);
        const highDiff = Math.abs(arr[high] - x);
        
        if(lowDiff <= highDiff) answer.unshift(arr[low--])
        else answer.push(arr[high++]);
    }
    
    while(low >= 0 && answer.length < k) {
        answer.unshift(arr[low--])
    }
    
    while(high < arr.length && answer.length < k) {
        answer.push(arr[high++]);
    }
    return answer
};