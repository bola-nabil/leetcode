var countSubstrings = function(s) {
    const n = s.length;
    const palindrome = Array.from(Array(n), () => Array(n).fill(false));
    let ans = 0;

    for (let i = 0; i < n; i++) {
        palindrome[i][i] = true;
        ans++;
    }

    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            palindrome[i][i + 1] = true;
            ans++;
        }
    }

    for (let len = 3; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            if (s[i] === s[i + len - 1] && palindrome[i + 1][i + len - 2]) {
                palindrome[i][i + len - 1] = true;
                ans++;
            }
        }
    }

    return ans;
};