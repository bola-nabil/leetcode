function findMissingAndRepeatedValues(grid) {
    const n = grid.length;
    const count = Array(n * n + 1).fill(0); 
    let repeated = 0;
    let missing = 0;
    
    for (const row of grid) {
        for (const num of row) {
            count[num]++;
            if (count[num] === 2) {
                repeated = num;
            }
        }
    }
    
    for (let i = 1; i <= n * n; ++i) {
        if (count[i] === 0) {
            missing = i;
            break;
        }
    }
    
    return [repeated, missing];
}