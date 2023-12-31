var maxLengthBetweenEqualCharacters = function(s) {
    const lastOccurrence = {};
    let maxLength = -1;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in lastOccurrence)
            maxLength = Math.max(maxLength, i - lastOccurrence[char] - 1);
        else
            lastOccurrence[char] = i;
    }

    return maxLength;
};