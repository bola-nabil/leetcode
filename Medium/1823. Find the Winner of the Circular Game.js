var findTheWinner = function(n, k) {
    let que = [];
    for(let i=1; i<=n; i++) {
        que.push(i);
    }
    while(que.length > 1) {
        let deleteCount = k - 1;
        while(deleteCount > 0) {
            que.push(que.shift());
            deleteCount--;
        }
        que.shift();
    }
    return que.shift();
};
