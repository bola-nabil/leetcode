var destCity = function (paths) {
    let setContainer = new Set()
    for(let path of paths){
        setContainer.add(path[0])
    }
    for(let path of paths){
        if(!setContainer.has(path[1])){
            return path[1]
        }
    }
};