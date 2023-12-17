var licenseKeyFormatting = function(s, k) {
    const newStr = s.replace(/-/g, '').toUpperCase(), arr = newStr.split('');
    for (let i = arr.length - 1 - k; i >= 0; i-= k)
        arr[i] = arr[i] + '-';

    return arr.join(''); 
};