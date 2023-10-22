var removeDuplicates = function(s) {
    const arr = s.split('');
    let ans = 0;
    for (let i = 0; i < arr.length; ++i) {
        ans === 0 || arr[i] !== arr[ans - 1] ? (arr[ans++] = arr[i]) : --ans;
    }
    return arr.slice(0, ans).join('');
};