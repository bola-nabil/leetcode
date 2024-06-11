var asteroidCollision = function(asteroids) {    
    const s = [];
    for (let i = 0; i < asteroids.length; i++) {
        const a = asteroids[i];        
        if ((s.length === 0 || s[s.length -1] < 0) && a < 0 ) {
            s.push(a);
            
        } else if (a > 0) {
            s.push(a);            
        } else {
            const pop = s.pop();
            if (Math.abs(pop) > Math.abs(a)) {
                s.push(pop);
            
            } else if (Math.abs(pop) < Math.abs(a)) {
                i--;
            } else { 
                continue;
            }
        }
    }
    return s;
};
