var findMinHeightTrees = function(n, edges) {
    if (!edges || n < 2) return [0];
    let graph = [];
    for (let [x, y] of edges) {
        graph[x] = graph[x] || [];
        graph[y] = graph[y] || [];
        graph[x].push(y);
        graph[y].push(x);
    }
    let leaves = [];
    graph.map((pts,i) => pts.length === 1 && leaves.push(i));
    while (n > 2) {
        n = n - leaves.length;
        let nxt_leaves = [];
        for (let leave of leaves) {
            tmp = graph[leave].pop();
            graph[tmp].splice(graph[tmp].indexOf(leave),1);
            graph[tmp].length === 1 && nxt_leaves.push(tmp);
        }
        leaves = nxt_leaves;
    }
    return leaves;
};
