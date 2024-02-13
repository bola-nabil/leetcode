var isThree = function (num) {
  if (num === 1) return false;
  let sqrt = Math.sqrt(num);
  if (sqrt === Math.floor(sqrt)) {
    for (let i = 2; i <= Math.sqrt(sqrt); i++) {
      if (sqrt % i === 0) return false;
    }
    return true;
  }
  return false;
};
