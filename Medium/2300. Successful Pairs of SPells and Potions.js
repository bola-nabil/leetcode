var successfulPairs = function(spells, potions, success) {
    // Sort potions asc order for binary search
    potions.sort((a, b) => a - b);
    const ans = [];
    for (const spell of spells) {
        // this number will help us to find the index of the first potion which is equal or more than that number
        const rel = success / spell;
        let left = 0, right = potions.length - 1;
        // standard binary search
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (potions[mid] < rel) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        // the answer for this number would be the difference between the potions leng and the index
        ans.push(potions.length - left);
    }
    return ans;
};
