var countPoints = function(rings) {
    let rods = '0123456789';
    let count = 0;
    for (let rod of rods) { 
        if (rings.includes(`R${rod}`) && 
            rings.includes(`G${rod}`) && 
            rings.includes(`B${rod}`)) count++;
    } return count;
};