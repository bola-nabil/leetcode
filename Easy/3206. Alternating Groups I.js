var numberOfAlternatingGroups = function(colors) {
    let count = 0;
    let n = colors.length;
    
    for (let i = 0; i < n; i++) {
        let middle = colors[i];
        let left = colors[(i - 1 + n) % n];
        let right = colors[(i + 1) % n];
        
        if (middle !== left && middle !== right && left === right) {
            count++;
        }
    }
    
    return count;
};
