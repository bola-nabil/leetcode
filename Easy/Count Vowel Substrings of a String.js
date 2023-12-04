const countVowelSubstrings = word => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const set = new Set();
    let count = 0;

    for (let i = 0; i < word.length; i += 1) {
        set.clear();

        for (let j = 0; j + i < word.length && vowels.has(word[j + i]); j += 1) {
        set.add(word[i + j]);

        if (set.size === vowels.size) count += 1;
        }
    }

    return count;
}