var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const count = k + 1;

    const dp = Array(count).fill(0);

    for (let start = n - 1; start >= 0; start--) {
        let currMax = 0;
        const end = Math.min(n, start + k);

        for (let i = start; i < end; i++) {
            currMax = Math.max(currMax, arr[i]);
            dp[start % count] = Math.max(dp[start % count], dp[(i + 1) % count] + currMax * (i - start + 1));
        }
    }
    return dp[0];
}