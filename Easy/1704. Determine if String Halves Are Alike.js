var halvesAreAlike = function(s) {
    let n = s.length;
    let a = s.slice(0,n/2);
    let b = s.slice(n/2,);

    let vowelMatchA = a.match(/(a|A|e|E|i|I|o|O|u|U)/g);
    let vowelMatchB = b.match(/(a|A|e|E|i|I|o|O|u|U)/g);

    if(vowelMatchA === null && vowelMatchB === null) 
        return(true);
    else if(vowelMatchA === null || vowelMatchB === null)
        return false;
    else if(vowelMatchA.length === vowelMatchB.length)
        return(true);
    else
        return(false);
};