var sortVowels = function (s) {
    let hash = new Map([
      ["A", 1],
      ["E", 1],
      ["I", 1],
      ["O", 1],
      ["U", 1],
      ["a", 1],
      ["e", 1],
      ["i", 1],
      ["o", 1],
      ["u", 1],
    ]);
    idsave = [];
    vowsave = [];
    for (let i = 0; i < s.length; i++) {
      if (hash.has(s[i])) {
        idsave.push(i);
        vowsave.push(s[i]);
      }
    }
    vowsave.sort();
    let res = s.split("");
    for (let i = 0; i < idsave.length; i++) {
      res[idsave[i]] = vowsave[i];
    }
    res = res.join("");
    return res;
};