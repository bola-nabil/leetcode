var digitCount = function(num) {
    let map = new Map();
    
    for( let i = 0; i < num.length; i++) {
    let count = 0
    for(let j = 0; j < num.length; j++) {
        if(i.toString() === num[j]) count++
        }
        map.set(i,count)
        if(map.get(i) != num[i]) return false
    }
    
    return true
};