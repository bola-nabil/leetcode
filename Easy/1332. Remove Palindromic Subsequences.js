var removePalindromeSub = function(s) {
    const palindromicSub = s.split('').reverse().join('');
    return s === palindromicSub ? 1 : 2;
};