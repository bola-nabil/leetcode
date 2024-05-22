var partition = function(s) {
    const output = [];
    const partitions = [];
    const isPalindrome = str => str === str.split('').reverse().join('');
    const findPalindrome = (str, start, parts, result) => {
        if (start === str.length) {
            result.push([...parts])
            return;
        }
        
        for (let i = start + 1; i <= str.length; i++) {
            const target = str.substring(start, i);
            if (isPalindrome(target)) {
                parts.push(target);
                findPalindrome(str, i, parts, result);        
                parts.pop();
            }
        }
    }
    findPalindrome(s, 0, partitions, output);       
    return output;
};
