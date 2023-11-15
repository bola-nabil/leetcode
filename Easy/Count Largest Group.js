const countLargestGroup = n => {
    let map = new Map(), max = 1, maxCount = 0
    for(let i = 1; i <= n; i++){
        let sum = sumDigits(i), sumCount = map.get(sum)+1 || 1
        map.set(sum, sumCount)
        if(sumCount === max)maxCount++
        else if(sumCount > max)maxCount = 1
        max = Math.max(max, sumCount)
    }
    return maxCount
};
const sumDigits = num => {
    let sum = 0
    while(num){
        sum += num % 10
        num = Math.trunc(num / 10)
    }
    return sum
}