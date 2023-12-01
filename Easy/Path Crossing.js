const CONFIG = {
    "N": [0, -1],
    'S': [0, 1],
    'E': [1, 0],
    'W': [-1, 0],
}

var isPathCrossing = function(path) {
    const hashmap = new Map();
    const currentPos = [0, 0];
    hashmap.set(String(currentPos), 1);
    
    for (let i = 0; i < path.length; i++) {
        currentPos[0] += CONFIG[path[i]][0];
        currentPos[1] += CONFIG[path[i]][1];
        
        if (hashmap.has(String(currentPos))) return true;
        hashmap.set(String(currentPos), 1);
    }
    
    return false;
};