var countTriples = function (n) {
  let count = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = a; b <= n; b++) {
      for (let c = b; c <= n; c++) {
        if (a * a + b * b === c * c) count++;
      }
    }
  }

  return count * 2;
};
