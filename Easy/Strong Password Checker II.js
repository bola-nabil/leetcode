var strongPasswordCheckerII = function(password) {
    let arrPassword = password.split('');

    let firstCon = arrPassword.length;

    let secondCon = password.match(/[a-z]/g);

    let thirdCon =  password.match(/[A-Z]/g);

    let forthCon = password.match(/\d/);

    let fifthCon = password.match(/\W/g);

    let sexCon;
    for(let i=0; i<arrPassword.length; i++) {
        if(arrPassword[i] == arrPassword[i+1]) {
            sexCon = true;
            break;
        } else sexCon = false;
    }

    if(firstCon >= 8 && secondCon !== null && thirdCon !== null && forthCon !== null && fifthCon !== null
        && sexCon == false) return(true);
    else return(false);
};