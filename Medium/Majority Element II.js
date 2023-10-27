var majorityElement = function(nums) {
    const n = nums.length
    if (n < 1) return []
    if (n < 2) return nums
    
    let count1 = 0, count2 = 0, candidate1 = 0, candidate2 = 1
    
    for (let i = 0; i < n; i++) {
        if (nums[i] == candidate1) count1++
        else if (nums[i] == candidate2) count2++
        else if (count1 == 0) {
            candidate1 = nums[i]
            count1 = 1
        } 
        else if (count2 == 0) {
            candidate2 = nums[i]
            count2 = 1
        } else {
            count1--
            count2--
        }
    }
    
    let x = []
    if (nums.count(candidate1) > n / 3) x.push(candidate1)
    if (nums.count(candidate2) > n / 3) x.push(candidate2)
        
    return x
};
Array.prototype.count = function(num) {
    let count = 0
    for (let i = 0; i < this.length; i++)
        if (this[i] == num) count++
    
    return count
}