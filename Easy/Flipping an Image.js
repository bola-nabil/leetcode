var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
            for (let j = 0; j < image[0].length; j++) {
                if (image[i][j] === 1) {
                    image[i][j] = 0
                } else {
                    image[i][j] = 1
                }
            }
    }

    image.map(e => e.reverse());
    return(image);
};