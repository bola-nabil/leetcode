var minFallingPathSum = function(matrix) {

    let len = matrix.length

    for(let i = 1; i < len; i++){
        for(let j = 0; j < len; j++){
            let a = matrix[i - 1][j - 1] != undefined  ? matrix[i - 1][j - 1] : Infinity 
            let b = matrix[i - 1][j ] != undefined ? matrix[i - 1][j ] : Infinity 
            let c = matrix[i - 1][j + 1] != undefined ? matrix[i - 1][j + 1] : Infinity 

            matrix[i][j] = matrix[i][j] + Math.min(a, b, c)
        }
    }

    return Math.min(...matrix[len - 1])
};
