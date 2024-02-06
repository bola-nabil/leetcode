var minTimeToType = function (word) {
  let minTime = 0;

  let diff = Math.abs("a".charCodeAt() - word.charCodeAt(0));
  minTime += diff <= 13 ? diff + 1 : 26 - diff + 1;

  for (let i = 0; i < word.length - 1; i++) {
    diff = Math.abs(word.charCodeAt(i) - word.charCodeAt(i + 1));
    minTime += diff <= 13 ? diff + 1 : 26 - diff + 1;
  }
  
  return minTime;
};