var findKthPositive = function (arr, k) {
  let prev = 0;

  for (let i = 0; i < arr.length; i++) {
    const diff = arr[i] - prev - 1;
    if (k > diff) k -= diff;
    else return prev + k;
    prev = arr[i];
  }
  return prev + k;
};