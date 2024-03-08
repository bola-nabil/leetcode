var minimumPushes = function (word) {
  let n = word.length;
  if (n <= 8) return n;
  else if (n <= 16) return 8 + 2 * (n - 8);
  else if (n <= 24) return 8 + 16 + 3 * (n - 16);
  else return 8 + 16 + 24 + 4 * (n - 24);
};
