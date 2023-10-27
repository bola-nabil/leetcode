var prefixCount = function(words, pref) {
  return(words.filter(e => e.startsWith(pref)).length);
};