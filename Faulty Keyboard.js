var finalString = function(s) {
    let output = [];
    for(let element of s)
        element == 'i' ? output.reverse() : output.push(element);
    return output.join("");
};