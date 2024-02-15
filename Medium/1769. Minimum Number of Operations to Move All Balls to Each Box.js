var minOperations = function(boxes) {
    const result = Array(boxes.length).fill(0);

    let notEmpty = 0;
    let sum = 0;

    for(let i=0; i<boxes.length; i++) {
        result[i] += sum;
        if(boxes[i] === '1')
            ++notEmpty;
        sum+=notEmpty;
    }

    notEmpty = 0;
    sum = 0;

    for (let i = boxes.length - 1; i >= 0; i--) {
        result[i] += sum;
        if (boxes[i] === "1") 
            ++notEmpty;
        sum += notEmpty;
    }
    return result;
};