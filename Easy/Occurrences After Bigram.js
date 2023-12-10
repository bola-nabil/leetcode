var findOcurrences = function(text, first, second) {
    let results = [];
    let arr = text.split(' ');
    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 2] === first && arr[i - 1] === second) {
            results.push(arr[i]);
        }
    }
    return results;
}