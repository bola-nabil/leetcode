var countEven = function(num) {
    let count = 0;
    for(let i=2; i<=num; i++) {
        let sum = 0;
        let temp = i;
        while(temp !== 0) {
            sum+= temp % 10;
            temp = Math.trunc(temp / 10);
        }
        if(sum % 2 === 0) count++;
        sum = 0;
    }
    return(count);
};