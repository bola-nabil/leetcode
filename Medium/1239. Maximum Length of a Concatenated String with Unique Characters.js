var maxLength = function (arr) {

    const isUnique = (s) => new Set(s).size === s.length;

    const backtrack = (start, path) => {
        if (isUnique(path))
            maxLength = Math.max(maxLength, path.length);

        for (let i = start; i < arr.length; i++)
            backtrack(i + 1, path + arr[i])
    }
    
    let maxLength = 0;
    backtrack(0, "");
    
    return maxLength;
};