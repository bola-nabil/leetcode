function setMap(words, map) {
    words.forEach(el => {
        map.set(el, map.get(el) + 1 || 1)
    })
}

var countWords = function (words1, words2) {
    const map1 = new Map();
    const map2 = new Map();
    let count = 0;
    setMap(words1, map1);
    setMap(words2, map2);

    map1.forEach((val, key) => {
        if (val === 1 && map2.has(key) && map2.get(key) === 1) count++
    })
    return count;
};