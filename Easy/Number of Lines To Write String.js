var numberOfLines = function(widths, s) {
        let count = 0;
        let lines = 1;
        let letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        ];
        for (let i = 0; i < s.length; i++) {
            let index = letters.indexOf(s[i])
            if (count + widths[index] > 100) {
                count = 0;
                lines = lines + 1;
            }
            count += widths[index];
        }
        return [lines, count]; 
};
