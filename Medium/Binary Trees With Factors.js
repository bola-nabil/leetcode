var numFactoredBinaryTrees = function(arr) {
    const mod = 1e9 + 7;
        arr.sort((a, b) => a - b);
        let ans = 0;
        const map = new Map();

        for (const x of arr) {
            let ways = 1;
            const max = Math.sqrt(x);

            for (let j = 0, left = arr[0]; left <= max; left = arr[++j]) {
                if (x % left !== 0) continue;
                const right = x / left;
                if (map.has(right)) {
                    ways = (ways + map.get(left) * map.get(right) * (left === right ? 1 : 2)) % mod;
                }
            }
            map.set(x, ways);
            ans = (ans + ways) % mod;
        }
        return ans;
};