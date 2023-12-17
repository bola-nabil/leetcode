const regexNumber = /^[0-9]$/;
var reformat = function(s) {
    const letters = [];
    const numbers = [];

    for (let i = 0; i < s.length; i++) {
        if(regexNumber.test(s[i])) {
            numbers.push(s[i]);
        } else {
            letters.push(s[i]);
        }
    }
    
    if (Math.abs(letters.length - numbers.length) > 1) return '';
    let output = '';
    for (let i = 0; i < s.length/2; i++) {
        if (letters.length > numbers.length) {
            output += letters[i];
            output += numbers[i] || '';
        } else {
            output += numbers[i];
            output += letters[i] || '';
        }
    }
    return output;
}