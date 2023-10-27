var heightChecker = function(heights) {
    const sortedHeights = [...heights].sort((a,b) => a - b);
    let output = 0;
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) output++;
    }
    
    return output;
};