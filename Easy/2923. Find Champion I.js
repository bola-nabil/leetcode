var findChampion = function (g) {
  let max = -Infinity;
  let max_i;

  g.forEach((r, i) => {
    let count = 0;
    for (let e of r)
      if (e === 1) {
        count++;
      }
    if (count > max) {
      max = count;
      max_i = i;
    }
  });

  return max_i;
};
