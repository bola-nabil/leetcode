var countOfAtoms = function(formula) {
    let stack = [];
    let cur = {};
    let i = 0;
    while (i < formula.length) {
        if (formula[i] === '(') {
            stack.push(cur);
            cur = {};
            i++;
        } else if (formula[i] === ')') {
            const [mult, newI] = readNextDigit(++i);
            i = newI;
            Object.keys(cur).forEach(key => cur[key] *= mult);
            const last = stack[stack.length - 1];
            // merge
            Object.keys(last).forEach(key => last[key] = last[key] + (cur[key] ?? 0));
            Object.keys(cur).forEach(key => {
               if (last[key] === undefined) {
                   last[key] = cur[key];
               } 
            });
            cur = stack.pop();
        } else {
            const [ele, newI] = readNextElement(i);
            i = newI;
            const [c, nI] = readNextDigit(i);
            i = nI;
            cur[ele] = (cur[ele] ?? 0) + c;
        }
    }
    
    return Object.entries(cur).sort((a,b) => a[0].localeCompare(b[0])).reduce((r, [key, val]) => r += `${key}${val === 1 ? '' : val}`, "");
    
    
    function readNextElement(i) {
        if (!formula[i].match(/[A-Z]/)) return null;
        let res = formula[i++];
        while (formula[i]?.match(/[a-z]/)) {
            res += formula[i++];
        }
        
        return [res, i];
    }
    
    function readNextDigit(i) {
        if (!formula[i]?.match(/[0-9]/)) return [1, i];
        let res = 0;
        while (formula[i]?.match(/[0-9]/)) {
            res = res * 10 + +formula[i++];
        }
        
        return [res, i];
    }
};
