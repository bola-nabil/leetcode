var removeTrailingZeros = function(num) {
  let res = num.match(/(\d+)?[^0]/g);
  return(`${res}`);
};