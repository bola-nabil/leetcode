/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let arr = [], countAge = 0;
    for(let i=0; i<details.length; i++) {
        arr[i] = +(`${details[i][11]}${details[i][12]}`);
        if(arr[i] > 60)
            countAge++;
    }
    return countAge;
};
