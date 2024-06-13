var maxVowels = function(s, k) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxCount = 0;
    let start = 0;
    let count = 0;
    for (let end = 0; end < s.length; end++) {
        if (vowels.includes(s[end])) {
            count +=1;
        }
        if (end - start + 1 > k) {
            if(vowels.includes(s[start])) {
                count -=1;
            }
            start +=1;
        }
        maxCount = Math.max(maxCount, count)
        if (maxCount == k) return maxCount;
    }
    return maxCount;
};
