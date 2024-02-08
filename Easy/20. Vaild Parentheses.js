var isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    let stack = [];
    for(let i=0; i<s.length;i++) {

        if(s[i] === '(') stack.push(')')
        else if (s[i] === '[') stack.push(']')
        else if (s[i] === '{')stack.push('}')

        else if (stack.length === 0 || stack.pop() !== s[i])
            return false;
    }
    return stack.length === 0 ?  true :  false
};