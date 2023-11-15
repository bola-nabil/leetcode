var daysBetweenDates = function(date1, date2) {
    let days1 = new Date(date1);
    let days2 = new Date(date2);

    let result = Math.abs(days1 - days2);

    return(result / 1000 / 60 / 60 / 24 );
};