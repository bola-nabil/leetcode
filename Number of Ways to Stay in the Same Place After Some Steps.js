var numWays = function(steps, arrLen) {
    const mod = 1000000007;
    const maxPosition = Math.min(Math.floor(steps / 2), arrLen - 1);
    const dp = new Array(steps + 1).fill().map(() => new Array(maxPosition + 1).fill(0));
    dp[0][0] = 1;
    for (let i = 1; i <= steps; i++) {
        for (let j = 0; j <= maxPosition; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j > 0) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % mod;
            }
            if (j < maxPosition) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % mod;
            }
        }
    }
    return dp[steps][0];
};