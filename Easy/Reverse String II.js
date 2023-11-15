var reverseStr = function (s, k, arr = s.split(""), k2 = k * 2) {
    for (let i = 0; i < arr.length - 1; i += k2) {
        swap(i, Math.min(i + k - 1, arr.length - 1));
    }
    return arr.join("");

    function swap(start, end) {
        while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
        }
    }
};