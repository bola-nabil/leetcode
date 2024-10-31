var solve = function(rb, fc, i, j, dp) {
    if (i >= rb.length) return 0;
    if (j >= fc.length) return Infinity;

    if (dp[i][j][fc[j][1]] !== -1) return dp[i][j][fc[j][1]];

    let notTake = solve(rb, fc, i, j + 1, dp);
    let take = Infinity;

    if (fc[j][1] > 0) {
        let distance = Math.abs(rb[i] - fc[j][0]);
        fc[j][1]--; // Decrement capacity temporarily
        take = distance + solve(rb, fc, i + 1, j, dp);
        fc[j][1]++; // Restore capacity
    }

    dp[i][j][fc[j][1]] = Math.min(take, notTake);
    return dp[i][j][fc[j][1]];
}
var minimumTotalDistance = function(robot, factory) {
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    let dp = Array.from({ length: robot.length }, () => 
        Array.from({ length: factory.length }, () => 
            Array(101).fill(-1)
        )
    );
    
    return solve(robot, factory, 0, 0, dp);
};
