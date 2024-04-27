var findRotateSteps = function(ring, key) {
    const positions = new Map();
    for (let i = 0; i < ring.length; i++) {
        if (!positions.has(ring[i])) {
            positions.set(ring[i], []);
        }
        positions.get(ring[i]).push(i);
    }
    const memo = new Array(key.length).fill(null).map(() => new Array(ring.length).fill(-1));
    return helper(0, 0, positions, key, ring, memo);
};

function helper(in_index, pos, positions, key, ring, memo) {
    if (in_index === key.length) {
        return 0;
    }
    if (memo[in_index][pos] !== -1) {
        return memo[in_index][pos];
    }
    let min_steps = Infinity;
    for (const i of positions.get(key[in_index])) {
        let steps;
        if (i >= pos) {
            steps = Math.min(i - pos, pos + ring.length - i);
        } else {
            steps = Math.min(pos - i, i + ring.length - pos);
        }
        const next_steps = helper(in_index + 1, i, positions, key, ring, memo);
        min_steps = Math.min(min_steps, steps + next_steps);
    }
    memo[in_index][pos] = min_steps + 1;
    return min_steps + 1;
}
