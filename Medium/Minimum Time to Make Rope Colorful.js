var minCost = function(colors, neededTime) {
  let cost = 0;
  for (let i = 1; i < colors.length; i++) {
    if (colors[i] !== colors[i - 1]) neededTime[i - 1] = 0;
    cost += Math.min(neededTime[i], neededTime[i - 1]);
    neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);
  }
  return cost;
};