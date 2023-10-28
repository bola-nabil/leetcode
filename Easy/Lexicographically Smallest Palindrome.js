const makeSmallestPalindrome = function (s) {
    const n = s.length
    s = s.split('')
    const halfLenght = Math.trunc(n / 2)
    for (let i = 0; i < halfLenght; i++) {
        if (s[i] !== s[n - 1 - i]) {
            if (s[i] < s[n - 1 - i]) s[n - 1 - i] = s[i]
            else  s[i] = s[n - 1 - i];
        }
    }
    return s.join('')
}