var largestLocal = function(grid) {
    const matrix = new Array(grid.length -2).fill(0)
                .map(() => new Array(grid[0].length-2).fill(0));
    
    for (let i=0; i< grid[i].length -2 ; i++){
        for(let j=0; j<grid.length -2 ;j++){
            matrix[i][j] = Math.max( 
                grid[i][j],     grid[i][j+1],   grid[i][j+2],
                grid[i+1][j],  grid[i+1][j+1],  grid[i+1][j+2],
                grid[i+2][j],  grid[i+2][j+1],  grid[i+2][j+2]
            );
            
        }
    }
    return matrix;
};