var intToRoman = function (num) {
    const romanNumerals = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M",
    };

    let result = '';
    const nums = Object.keys(romanNumerals).reverse();

    for(let i=0; i<nums.length; i++) {
        const numeral  = parseInt(nums[i]);
        const value = romanNumerals[numeral];

        while(num >= numeral) {
            result += value;
            num -= numeral;
        }
    }
    return result;
};
