const MOVE = {
    "R": [0, 1],
    "L": [0, -1],
    "U": [-1, 0],
    "D": [1, 0],
}

var judgeCircle = function(moves) {
    const current = [0, 0];
    
    for (let i = 0; i < moves.length; i++) {
        current[0] += MOVE[moves[i]][0];
        current[1] += MOVE[moves[i]][1];
    }
    
    return !current[0] && !current[1];
}