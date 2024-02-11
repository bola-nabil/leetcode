var longestPalindrome = function (s) {
  const obj = {};
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!obj[char])
      obj[char] = 1;
    else {
      obj[char] = 0;
      sum += 2;
    }
  }

  if (sum < s.length)
    return sum + 1;
  else
    return sum;
};
