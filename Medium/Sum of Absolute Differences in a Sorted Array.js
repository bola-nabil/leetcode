var getSumAbsoluteDifferences = function(nums) {
    let s = nums.reduce((acc, el) => acc + el, 0)
    let pref = 0
    return nums.map((el, i)=>{
        pref += el
        return el*(i+i+2-nums.length) - 2*pref + s
    })
};