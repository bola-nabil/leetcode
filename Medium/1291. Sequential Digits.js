var sequentialDigits = function(low, high) {
        const a = [];
        for (let i = 1; i <= 9; ++i) {
        let num = i;
        let nextDigit = i + 1;

        while (num <= high && nextDigit <= 9) {
            num = num * 10 + nextDigit;
            if (low <= num && num <= high)
                a.push(num);
            ++nextDigit;
        }
    }

    a.sort((a, b) => a - b);
    return a;
};
