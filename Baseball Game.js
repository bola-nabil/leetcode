var calPoints = function(ops) {
    let arr = [];
    let sum = 0;
    for(let i=0; i<ops.length; i++) {
        if(+ops[i] === Number(ops[i])) arr.push(+ops[i]);
        else if(ops[i] === '+') arr.push(arr[arr.length-2] + arr[arr.length-1]);
        else if(ops[i] === 'D') arr.push(arr[arr.length-1]*2);
        else if(ops[i] === 'C') arr.pop();
    }

    for(let i=0; i<arr.length; i++) {
        sum+=arr[i];
    }
    return sum;
};