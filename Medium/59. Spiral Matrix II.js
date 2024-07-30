var generateMatrix = function(n) {
    const M = [...Array(n)].map(() => Array(n).fill(0));
    let x = 0, y = 0, dx = 1, dy = 0;

    for(let i=1, nn = n**2; i<=nn; i++) {
        M[y][x] = i;
        if (!M[y + dy] || M[y + dy][x + dx] !== 0)
            [dx, dy] = [-dy, dx];
            x += dx;
            y += dy
    }
    return M;
};
