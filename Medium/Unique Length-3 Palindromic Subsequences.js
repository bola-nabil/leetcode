var countPalindromicSubsequence = function (s) {
    const c = "abcdefghijklmnopqrstuvwxyz";
    let a = 0,
      t = 0;

    for (const x of c) {
      const l = s.indexOf(x);
      if (l === -1) {
        continue;
      }
      const r = s.lastIndexOf(x);
      if (l >= r) {
        continue;
      }

      const v = new Array(128).fill(false);
      t = 0;
      for (let i = l + 1; i < r; i++) {
        if (!v[s.charCodeAt(i)]) {
          v[s.charCodeAt(i)] = true;
          t++;
          if (t === 26) {
            break;
          }
        }
      }
      a += t;
    }
    return a;
};
