var minimumDeletions = function(s) {
    let n = s.length;
    let prefixB = new Array(n + 1).fill(0);
    let suffixA = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        prefixB[i] = prefixB[i - 1] + (s[i - 1] === 'b' ? 1 : 0);
    }

    for (let i = n - 1; i >= 0; i--) {
        suffixA[i] = suffixA[i + 1] + (s[i] === 'a' ? 1 : 0);
    }

    let minDeletions = Infinity;

    for (let i = 0; i <= n; i++) {
        minDeletions = Math.min(minDeletions, prefixB[i] + suffixA[i]);
    }

    return minDeletions;
};
