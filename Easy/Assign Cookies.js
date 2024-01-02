var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    let index = 0;
    let cnt = 0;
    
    while (index < s.length && cnt < g.length) {
        if (s[index] >= g[cnt]) cnt++;
        index++;
    }
    
    return cnt;
};
