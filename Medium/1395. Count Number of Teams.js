function numTeams(rating) {
    let count = 0;
    const n = rating.length;

    for (let j = 0; j < n; j++) {
        let lessLeft = 0, lessRight = 0, greaterLeft = 0, greaterRight = 0;

        for (let i = 0; i < j; i++) {
            if (rating[i] < rating[j]) lessLeft++;
            if (rating[i] > rating[j]) greaterLeft++;
        }

        for (let k = j + 1; k < n; k++) {
            if (rating[j] < rating[k]) lessRight++;
            if (rating[j] > rating[k]) greaterRight++;
        }

        count += lessLeft * lessRight + greaterLeft * greaterRight;
    }

    return count;
};
