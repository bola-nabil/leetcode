var reformatNumber = function (number) {
    const reRemoveDash = /\D/g;
    const reSeparateByDash = /(...?(?=..))/g;
    return number.replace(reRemoveDash, "").replace(reSeparateByDash, "$1-");
}