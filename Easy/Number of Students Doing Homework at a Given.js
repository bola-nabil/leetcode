var busyStudent = function(startTime, endTime, queryTime) {
    let countStudents = 0;
    for(let i=0; i<startTime.length; i++) {
        if(startTime[i] <= queryTime && endTime[i] >= queryTime)
            countStudents++;
    }
    return countStudents;
};