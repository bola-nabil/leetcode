var rangeBitwiseAnd = function (left, right) {
  let shift = 0;
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  return left << shift;
};
