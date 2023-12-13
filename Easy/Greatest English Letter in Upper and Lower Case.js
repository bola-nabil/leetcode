var greatestLetter = function(s) {
    let str = s.split("").sort();
    let i = str.length-1
    while (i>=0 && str[i].toLowerCase() == str[i]) {
        let char = str[i].toUpperCase()
        if (str.includes(char))
            return char.toString()
        i--
    }
    return ""
}