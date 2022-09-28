var restoreString = function(s, indices) {
    let newWord = [];
  for (let i = 0; i < indices.length; ++i) {
    newWord[indices[i]] = s.charAt(i);
  }
  return newWord.join('');
};