var minWindow = function (s, t) {
    if (!s || !t) {
        return "";
    }

    let dictT = new Map();
    for (let c of t)
        dictT.set(c, (dictT.get(c) || 0) + 1);

    let required = dictT.size;
    let l = 0, r = 0;
    let formed = 0;

    let windowCounts = new Map();
    let ans = [-1, 0, 0];

    while (r < s.length) {
        let c = s.charAt(r);
        windowCounts.set(c, (windowCounts.get(c) || 0) + 1);

        if (dictT.has(c) && windowCounts.get(c) === dictT.get(c))
            formed++;

        while (l <= r && formed === required) {
            c = s.charAt(l);

            if (ans[0] === -1 || r - l + 1 < ans[0]) {
                ans[0] = r - l + 1;
                ans[1] = l;
                ans[2] = r;
            }

            windowCounts.set(c, windowCounts.get(c) - 1);
            if (dictT.has(c) && windowCounts.get(c) < dictT.get(c))
                formed--;

            l++;
        }
        r++;
    }

    return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
};