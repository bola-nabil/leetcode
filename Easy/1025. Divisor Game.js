var divisorGame = function(n) {
  const dp = new Array(n + 1).fill(false);
  dp[2] = true;

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j === 0 && !dp[i - j]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}
