function buildArray(target, n) {
    const targetSet = new Set(target);
    const result = [];

    for (let i = 1; i <= target[target.length - 1]; i++) {
        if (targetSet.has(i)) {
            result.push("Push");
        } else {
            result.push("Push");
            result.push("Pop");
        }
    }
    return result;
}