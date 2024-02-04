var findKOr = function(nums, k) {
    let ans = 0;

    for (let i = 0; i < 31; i++) {
        let rep = 1 << i;
        let count = 0;

        for (let ele of nums) {
            if ((rep & ele) !== 0)
                count++;
        }

        if (count >= k)
            ans+= rep;
    }

    return ans;
}