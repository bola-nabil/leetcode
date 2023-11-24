var maxCoins = function (piles) {
    piles.sort((a, b) => a - b);
    let ans = 0;
    for (let i = 0, j = piles.length - 2; i < j; i++, j -= 2) ans += piles[j];
    return ans;
};
