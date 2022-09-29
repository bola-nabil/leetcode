var mostWordsFound = function(sentences) {
    let results = [];
    for(let i=0;i<sentences.length;i++) {
        results.push(sentences[i].split(" ").length);
    }
    return (Math.max(...results));
};
