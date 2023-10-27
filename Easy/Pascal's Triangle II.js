var getRow = function(rowIndex) {
    let triangle = [];

    for (let i = 0; i <= rowIndex; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                let prevRow = i - 1;
                let leftVal = triangle[prevRow][j - 1];
                let rightVal = triangle[prevRow][j];
                row.push(leftVal + rightVal);
            }
        }
        triangle.push(row);
    }

    return triangle[rowIndex];
};