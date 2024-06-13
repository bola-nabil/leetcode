var longestOnes = function(A, K) {
    let left = 0, right = 0;
    
    while(right < A.length) {
        if(A[right] === 0) K--;
        if(K < 0) {
            if(A[left] === 0) K++;
            left++;
        }
        right++;
    }
    return right-left;
};
