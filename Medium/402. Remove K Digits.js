var removeKdigits = function(num, k) {
    const stack = [];
    
    for (let digit of num) {
        while (k > 0 && stack.length > 0 && parseInt(stack[stack.length - 1]) > parseInt(digit)) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    while (stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }
    
    return stack.length > 0 ? stack.join('') : '0';
};
