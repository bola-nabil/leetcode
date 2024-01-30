function resolves(a, b, Operator) {
    if (Operator === '+') return a + b;
    else if (Operator === '-') return a - b;
    else if (Operator === '*') return a * b;
    return Math.trunc(a / b);
}

function evalRPN(tokens) {
    const stack = [];
    for (const token of tokens) {
        if (token.length === 1 && token.charCodeAt(0) < 48) {
            const integer2 = stack.pop();
            const integer1 = stack.pop();
            const operator = token;
            const resolvedAns = resolves(integer1, integer2, operator);
            stack.push(resolvedAns);
        } else
            stack.push(parseInt(token, 10));
    }
    return stack.pop();
}