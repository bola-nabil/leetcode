var averageWaitingTime = function(customers) {
    let n = customers.length;
    let curTime = 0;
    let totalTime = 0;
    for(let i=0; i<n; i++) {
        if(curTime <= customers[i][0]) {
            totalTime += customers[i][1];
            curTime = customers[i][0] + customers[i][1];
        } else {
            totalTime += (curTime - customers[i][0] + customers[i][1]);
            curTime += customers[i][1];
        }
    }
    return totalTime / n;
};
