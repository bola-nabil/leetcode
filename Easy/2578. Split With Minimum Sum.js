var splitNum = function (num) {
  let str = num.toString();
  let nums = str
    .split("")
    .map((n) => +n)
    .sort((a, b) => a - b);

  let splitStr1 = "",
    splitStr2 = "";
  let i = 0;
  for (let digit of nums) {
    if (i % 2 === 0) splitStr1 += digit;
    else splitStr2 += digit;
    i++;
  }
  return +splitStr1 + +splitStr2;
};
