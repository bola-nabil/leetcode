var separateDigits = function(nums) {
    let convertToString = nums.join("");
    return(convertToString.match(/\d/g))
};