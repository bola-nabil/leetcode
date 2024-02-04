var maximumOddBinaryNumber = function(s) {
    let oddBinary = s.split('').sort((a,b) => (b -a));
    oddBinary.shift();
    oddBinary.push(1);
    return (oddBinary.join(''))
};