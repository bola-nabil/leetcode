var repeatedSubstringPattern = function(s) {
    const n = s.length;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            const substring = s.slice(0, i);
            let repeated = "";
            for (let j = 0; j < n / i; j++) {
                repeated += substring;
            }
            if (repeated === s) return true;
        }
    }
    return false;
};