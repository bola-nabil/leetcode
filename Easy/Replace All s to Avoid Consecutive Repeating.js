var modifyString = function(s) {
    s = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "?" && s[i - 1] !== "a" && s[i + 1] !== "a") {
            s[i] = "a";
            continue;
        }
        if (s[i] === "?" && s[i - 1] !== "b" && s[i + 1] !== "b") {
            s[i] = "b";
            continue;
        }
        if (s[i] === "?") {
            s[i] = "c";
        }
    }
    return s.join("");
}