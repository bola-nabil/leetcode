var countTime = function(time) {
    let [hours,minutes] = time.split(':');
    let mul = 1;
    if(hours == '??') mul *= 24;
    else{
        if(hours[0] == '?') hours[1] > 3 ? mul *= 2 : mul *= 3; 
        if(hours[1] == '?') hours[0] == 2 ? mul *= 4 : mul *= 10;    
    }
    if(minutes[0] == '?') mul *= 6;
    if(minutes[1] == '?') mul *= 10;
    return mul;
};
