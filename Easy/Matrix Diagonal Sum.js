var diagonalSum = function(mat) {
    let sum = 0, n = mat.length;
    for(let i=0; i<n; i++) sum+=mat[i][i];
    for(let i=0; i<n; i++) if(n%2==0 || i!==n>>1) sum+=mat[n-i-1][i];
    return sum;
};