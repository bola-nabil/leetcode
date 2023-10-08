var maxDotProduct = function (nums1, nums2) {
    const n = nums1.length, m = nums2.length;
    let cache = new Array(n).fill().map(() => new Array(m));
    const dp = (i, j) => {
        if (i === n || j == m) return -Infinity;
        if (cache[i][j] !== undefined) return cache[i][j];
        return cache[i][j] = Math.max((nums1[i] * nums2[j]), dp(i + 1, j + 1) + (nums1[i] * nums2[j]), dp(i + 1, j + 1), dp(i + 1, j), dp(i, j + 1));

    }
    return dp(0, 0);
}