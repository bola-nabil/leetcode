var minimumBoxes = function(apple, capacity) {
    let noOfApples = 0;
    let minBoxes = 0;

    for (let x of apple) {
        noOfApples += x;
    }

    capacity.sort((a, b) => a - b);

    let size = capacity.length - 1;

    for (let i = size; i >= 0; i--) {
        noOfApples -= capacity[i];
        minBoxes++;

        if (noOfApples <= 0) {
            break;
        }
    }

    return minBoxes;
};
