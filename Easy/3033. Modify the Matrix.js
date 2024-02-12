var modifiedMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const answer = matrix.map((row) => [...row]);

  for (let c = 0; c < n; c++) {
    let maxVal = -Infinity;
    for (let r = 0; r < m; r++) {
      maxVal = Math.max(maxVal, matrix[r][c]);
    }
    for (let r = 0; r < m; r++) {
      if (matrix[r][c] === -1)
        answer[r][c] = maxVal;
    }
  }

  return answer;
};
