var lexicalOrder = function(n) {
    let s = [];

    for (let i = 1; i <= n; i++)
    {
        s.push(i.toString());
    }

    s.sort();
    let ans = [];
    for (let i = 0; i < n; i++) { 
        ans.push(parseInt(s[i]) + " ");
    }
    let results = [];
    for (let i = 0; i < n; i++) {
        results[i] = (ans[i] + " ");
    }
    return results;
}
