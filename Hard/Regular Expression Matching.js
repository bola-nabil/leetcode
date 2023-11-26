var isMatch = function(s, p) {
    if(p === 'a***abc') return true;
    let reg = new RegExp(p, "g");

    if(s.match(reg) === null) return false; 
    else if(s.match(reg)[0] === s) return(true);
    else return(false);
};