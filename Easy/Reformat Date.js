var reformatDate = function(date) {
    let months = { "Jan":  1,
                    "Feb": 2,
                    "Mar": 3,
                    "Apr": 4,
                    "May": 5,
                    "Jun": 6,
                    "Jul": 7,
                    "Aug": 8,
                    "Sep": 9,
                    "Oct": 10,
                    "Nov": 11, 
                    "Dec": 12
    };

    let theDay = date.match(/\d+/g);
    let theMonth = date.match(/\w+/g);
    let theYear = date.match(/\d{4,}/g)
    let outputDay = theDay[0].toString();
    let outputMonth = months[`${theMonth[1]}`];
    if(outputDay < 10) outputDay = `0${outputDay}`;
    if(outputMonth < 10) outputMonth = `0${outputMonth}`;
    return(`${theYear}-${outputMonth}-${outputDay}`);
};