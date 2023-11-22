var numDifferentIntegers = function(word) {
    const str=word.replace(/[^0-9]+/g,' ').trim().replace(/[\s]+/g,' ').split(' ').filter(e=>e&&e).map(e=>e.replace(/^[0]+/,''));
    return new Set([...str]).size;
};