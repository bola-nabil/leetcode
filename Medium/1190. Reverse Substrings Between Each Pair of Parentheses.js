let stack = [];
    
    for (let char of s) {
        if (char === ')') {
            let substr = '';
            while (stack.length && stack[stack.length - 1] !== '(') {
                substr = stack.pop() + substr;
            }
            stack.pop();  // pop the '('
            for (let reversedChar of substr.split('').reverse()) {
                stack.push(reversedChar);
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
}
