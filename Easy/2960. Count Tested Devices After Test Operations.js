var countTestedDevices = function(batteryPercentages) {
    let lengthOfBarrery = batteryPercentages.length, res = 0;
    for(let i=0; i<lengthOfBarrery; i++) {
        if(batteryPercentages[i] > 0) {
            res++;
            for(let j=i+1; j<lengthOfBarrery; j++)
                batteryPercentages[j]--;
        }
    }
    return res;
};
