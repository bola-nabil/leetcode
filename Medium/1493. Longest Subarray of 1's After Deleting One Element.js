var longestSubarray = function(nums) {
  const dp = [...new Array(nums.length)].map(() => new Array(2));
  dp[0] = [nums[0], 0];
  let max = 0;
    
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == 0) {
      dp[i][1] = dp[i - 1][0];
      dp[i][0] = 0;
    } else {
      dp[i][0] = dp[i - 1][0] + 1;
      dp[i][1] = dp[i - 1][1] + 1;
    }  
    max = Math.max(dp[i][1], max);
  }
  
  return max;
};
