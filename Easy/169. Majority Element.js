// const nums = [2,2,1,1,1,2,2];

// nums.sort();
// const n = nums.length, majorityELement = n / 2;
// let count = 0;
// for(let i = 0; i<n; i++) {
//     for(let j=i+1; j<n; j++) {
//         if(nums[i] === nums[j]) {
//             count++;
//             break;
//         }
//     }
// }

// console.log(count);

var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 0, n = nums.length, majorityEl = n / 2;
    if (n === 1)
        return nums[0];
    for (var i = 0; i < n - 1; i++) {
        if (nums[i] !== nums[i + 1])
            count = 0;
        else
            count++;
        if (count >= Math.floor(majorityEl))
            return nums[i];
    }
    return 0;
}