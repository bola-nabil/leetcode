 var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let r = rStart, c = cStart, results = [];
    results.push([r,c]);
    const walk = (steps,rStep,cStep) => {
        for (let i =0;i<steps;i++) {
            r +=rStep, c+=cStep;
            if ( r>=0 && c >=0 && r < rows && c<cols) results.push([r,c]);
        }
    }
    let distance = 1;  
    let rDirection = 0, cDirection = 1;
    while (results.length < rows*cols) {
        walk(distance,rDirection,cDirection);
        [rDirection,cDirection] = [cDirection,rDirection];
        walk(distance,rDirection,cDirection);
        [rDirection,cDirection] = [-1*cDirection,-1*rDirection];
        distance++;
    }
    return results;
};
