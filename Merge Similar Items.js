var mergeSimilarItems = function(items1, items2) {
    map = new Map()

    for (item of items1) {
        map.set(item[0], item[1])
    }

    for (item of items2) {
        if (map.get(item[0]) != undefined) 
            map.set(item[0], item[1] + map.get(item[0]))
        else 
            map.set(item[0], item[1])
    }    

    return [...map].sort((a, b) => a[0] - b[0])    
};