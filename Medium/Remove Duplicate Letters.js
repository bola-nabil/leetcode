var removeDuplicateLetters = (s) => {
    const stack = [];
    const seen = new Set();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!seen.has(char)) {
        while (
            stack.length > 0 &&
            stack[stack.length - 1] > char &&
            s.indexOf(stack[stack.length - 1], i) > i
        ) {
            seen.delete(stack.pop());
        }

        seen.add(char);
        stack.push(char);
        }
    }

    return stack.join('');
};