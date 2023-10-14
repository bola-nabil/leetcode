var percentageLetter = function(s, letter) {
    let reg = new RegExp(letter, "g");
    let countReg = s.match(reg);

    if(countReg === null) 
        return(0);
    else
        return(Math.floor((countReg.length / s.length) * 100));
};