var countNegatives = function(grid) {
    let convertString = grid.join(" ");
    let res = convertString.match(/-\w/g)

    if(res === null) return(0);
    else return(res.length);
};