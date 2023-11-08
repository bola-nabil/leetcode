var isReachableAtTime = function(startX, startY, targetX, targetY, time) {
    if (startX === targetX && startY === targetY) {
        if (time === 1) return false;
    }
    
    let xDifference = startX - targetX;
    let yDifference = startY - targetY;
    
    if (xDifference < 0) xDifference = -xDifference;
    if (yDifference < 0) yDifference = -yDifference;

    let maxDifference = Math.max(xDifference, yDifference);
    
    if (maxDifference <= time) 
        return true;

    return false;
}