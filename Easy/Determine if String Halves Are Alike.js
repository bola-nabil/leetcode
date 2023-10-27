var halvesAreAlike = function(s) {
    let lowerLetters = s.toLowerCase();

    let a = lowerLetters.slice(0,s.length/2);
    let b = lowerLetters.slice(s.length/2);

    let res1 = a.match(/(a|e|i|o|u)/g);
    let res2 = b.match(/(a|e|i|o|u)/g);

    if(res1 == null )
        res1 = "";
    if(res2 == null)
        res2 = "";

    if(res1.length === res2.length)
        return true;
    else
        return false;
};