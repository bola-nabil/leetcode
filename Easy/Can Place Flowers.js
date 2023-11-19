var canPlaceFlowers = function(flowerbed, n) {
    let noAdjacent = 0
    flowerbed.forEach((_value, index) => {
        const prev = index - 1 
        const next =  index + 1

        if (!flowerbed[prev] && !flowerbed[index] && !flowerbed[next]) {
            noAdjacent++
            flowerbed[index] = 1
        }
    })

    return noAdjacent >= n
};