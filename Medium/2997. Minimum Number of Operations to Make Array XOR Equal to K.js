var minOperations = function (a, k) {
  for (const e of a) {
    k ^= e
  }
  return k.toString(2).replaceAll(/0/g, "").length
};
