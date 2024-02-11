var reverseBits = function (n) {
  let binaryStr = n.toString(2);
  binaryStr = binaryStr.padStart(32, "0");
  let reversedBinaryStr = binaryStr.split("").reverse().join("");
  let reversedInt = parseInt(reversedBinaryStr, 2);
  return reversedInt;
};
