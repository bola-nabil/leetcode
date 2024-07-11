var validStrings = function(n) {
    if(n === 1) return ["0","1"];
    return validStrings(n - 1).flatMap(s => s.endsWith("1") ?
        [s + "1", s + "0"] : s + "1"
    );
};
