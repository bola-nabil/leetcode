var bagOfTokensScore = function (tokens, power) {
  tokens.sort((a, b) => a - b);

  let score = 0;
  let maxScore = 0;
  let left = 0;
  let right = tokens.length - 1;

  while (left <= right) {
    if (power >= tokens[left]) {
      power -= tokens[left];
      left++;
      score++;
      maxScore = Math.max(maxScore, score);
    } else if (score > 0) {
      power += tokens[right];
      right--;
      score--;
    } else {
      break;
    }
  }
  return maxScore;
};
