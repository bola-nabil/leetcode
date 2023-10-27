/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const hashMap = {};

  for (let char of s) {
    if (hashMap[char]) {
      hashMap[char] += 1;
    } else {
      hashMap[char] = 1;
    }
  }

  const freq = Object.values(hashMap)

  for (let i = 1; i < freq.length; i++) {
    if (freq[i] !== freq[0]) {
      return false;
    }
  }

  return true;
};