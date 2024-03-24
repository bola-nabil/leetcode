var maximumLengthSubstring = function(s) {
    let n = s.length;
    let m = new Map();
    let i = 0, j = 0, maxi = 0;

    while (j < n) {
        if (!m.has(s[j]))
            m.set(s[j], 1);
        else
            m.set(s[j], m.get(s[j]) + 1);

        if (m.get(s[j]) <= 2) {
            maxi = Math.max(maxi, j - i + 1);
            j++;
        } else {
            while (m.get(s[j]) > 2) {
                m.set(s[i], m.get(s[i]) - 1);
                if (m.get(s[i]) === 0) {
                    m.delete(s[i]);
                }
                i++;
            }
            j++;
        }
    }
    return maxi;
}
