var isAnagram = function(s, t) {
    const strOne = s.split('').sort().join("");
    const strTwo = t.split('').sort().join("");

    if(strOne === strTwo) return(true);
    else return(false);
};