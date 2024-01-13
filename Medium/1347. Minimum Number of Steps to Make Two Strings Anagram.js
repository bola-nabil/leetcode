var minSteps = function(s, t) {
    const countS = new Array(26).fill(0);
    const countT = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        countS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        countT[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let steps = 0;
    for (let i = 0; i < 26; i++) {
        steps += Math.abs(countS[i] - countT[i]);
    }

    return Math.floor(steps / 2);  
};