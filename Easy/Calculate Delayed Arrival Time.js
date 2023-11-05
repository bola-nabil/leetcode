var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    let time = arrivalTime + delayedTime;

    if(time >= 24) return(time - 24);
    else return(time);
};