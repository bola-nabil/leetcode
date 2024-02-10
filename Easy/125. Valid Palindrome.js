function chekcIsPalindomre(s) {
    return s === s.split("").reverse().join("");
}

var isPalindrome = function(s) {
    let lowercaseChars = s.toLowerCase();

    let palindorme = lowercaseChars.match(/[a-z0-9]/g);

    if(palindorme === null || chekcIsPalindomre(palindorme.join(""))) return(true);
    else return(false);
};