var isSubstringPresent = function(s) {
    const reverseString = str => str.split('').reverse().join('');

    for (let i = 0; i < s.length - 1; i++) {
        const substring = s.substring(i, i + 2);
        if (s.includes(reverseString(substring)))
            return true;
    }

    return false;
};
