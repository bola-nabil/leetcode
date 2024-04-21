var validPath = function(n, edges, start, end) {
    const graph = new Map();    
    const visited = new Set();
    
    for (const [v, e] of edges) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        
        if (graph.has(e)) {
            graph.get(e).push(v);
        } else {
            graph.set(e, [v]);
        }
    }
        
    function dfs(v) {
        visited.add(v);
        const edges = graph.get(v);
                
        if (edges && edges.length > 0) {
            for (const e of edges) {
                if (!visited.has(e)) dfs(e);
            }
        }
    }
        
    dfs(start);        
    return visited.has(end);
};
