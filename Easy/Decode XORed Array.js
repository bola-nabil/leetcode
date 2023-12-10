var decode = function (encoded, first) {
    const result = [first];
    for (let i = 0; i < encoded.length; i++)
        result.push(result[i] ^ encoded[i]);
        
    return result;
};