function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

var dayOfYear = function(date) {
    let months = [31,28,31,30,31,30,31,31,30,31,30,31];
    let days = new Date(date);
    let year = days.getFullYear();
    let month = days.getMonth();
    let sum = 0;
    for(let i=0; i<month; i++) sum+=months[i];
    if (isLeapYear(year) && days.getMonth() + 1 > 2) return(sum + days.getDate() + 1);
    else  return(sum + days.getDate());
};