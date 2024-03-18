var areSimilar = function(mat, k) {
    let width = mat[0].length, height = mat.length;
    k %= width;
    for(let r = 0; r<height; r++){
        for(let c = 0; c<width; c++){
            let c2 = c%2 ? (c+k)%width : (c-k+width)%width;
            if(mat[r][c2] !==mat[r][c]) return false;
       }
    }
    return true; 
};
