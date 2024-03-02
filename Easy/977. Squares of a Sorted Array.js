var sortedSquares = function (nums) {
  const squaresArray = nums.map((num) => Math.abs(num ** 2));
  squaresArray.sort((a, b) => a - b);

  return squaresArray;
};
