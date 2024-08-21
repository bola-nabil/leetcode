var strangePrinter = function(s) {
    const n = s.length;
    const memo = Array(n).fill().map(() => Array(n).fill(0));

    function dp(l, r) {
        if (l>r) return 0;

        if (memo[l][r]) return memo[l][r];

        let min = 1 + dp(l+1, r);

        for (let i=l+1; i<=r; ++i)
            if (s[i]==s[l])
                min = Math.min(min, dp(l+1, i-1) + dp(i, r));

        memo[l][r] = min;
        return min;
    }

    return dp(0, n-1);
};
