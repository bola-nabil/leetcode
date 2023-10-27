var isMonotonic = function(A) {
  return (
    A.every((v, i) => i === 0 || v <= A[i - 1]) ||
    A.every((v, i) => i === 0 || v >= A[i - 1])
  );
};