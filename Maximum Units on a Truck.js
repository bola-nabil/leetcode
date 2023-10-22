var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b)=>{
        return b[1]-a[1]
    });
    let maxUnit = 0;    
    for(let i = 0; i < boxTypes.length; i++){
        if(truckSize <= 0) break;
        if(truckSize > boxTypes[i][0]){
            maxUnit += boxTypes[i][0] * boxTypes[i][1]
            truckSize -= boxTypes[i][0]
        }
        else{
            maxUnit += truckSize * boxTypes[i][1]
            truckSize -= boxTypes[i][0]
        }
    }
    return maxUnit
};