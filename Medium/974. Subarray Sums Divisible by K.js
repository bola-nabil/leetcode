var subarraysDivByK = function(A, K) {

    let freq = new Array(K).fill(0);
    freq[0]=1

    let sum = 0;
    let count=0;

    for(let i = 0; i < A.length; i++){
        sum=sum+A[i]
        var remainder= sum%K
        if(remainder<0)remainder+=K

        count+=freq[remainder]
        freq[remainder]++
    }
    return count
};
