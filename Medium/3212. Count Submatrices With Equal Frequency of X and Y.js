var numberOfSubmatrices = function(grid) {
    let result = 0;
    const cols = grid[0].length;
    const hasX = new Array(cols);
    let count;

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < cols; ++j) {
            count = 0;
            if (grid[i][j] === "X") {
                if (!hasX[j]) hasX[j] = true;
                ++count;
            }
            if (grid[i][j] === "Y") --count;
            if (i > 0) {
                count += grid[i - 1][j];
            }
            if (j > 0) {
                if (!hasX[j] && hasX[j - 1]) hasX[j] = true;
                count += grid[i][j - 1];
            }
            if (i > 0 && j > 0) {
                count -= grid[i - 1][j - 1];
            }
            grid[i][j] = count;

            if (hasX[j] && count === 0) ++result;
        }
    }

    return result;
};
