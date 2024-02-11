var addBinary = function (a, b) {
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  let result = "";
  let carry = 0;

  for (let i = maxLength - 1; i >= 0; i--) {
    const digit1 = parseInt(a[i], 10);
    const digit2 = parseInt(b[i], 10);
    const sum = digit1 + digit2 + carry;
    result = (sum % 2) + result;
    carry = sum >= 2 ? 1 : 0;
  }

  if (carry > 0) 
    result = carry + result;

  return result;
};