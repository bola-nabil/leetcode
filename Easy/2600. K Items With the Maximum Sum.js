var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let total = numOnes + numZeros;
  let remainder = total - k;

  if (k <= numOnes) return k;
  else if ((k > numOnes && k < total) || k == total) return numOnes;
  else if (k > total) return numOnes + remainder;
};
