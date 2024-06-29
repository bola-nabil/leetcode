// DFS - bottom top
const dfs = (inEdges, idx, finished) => {
  if (finished[idx]) return; // avoid repeat calculation
  if (inEdges[idx].size === 0) return; // end condition
  for (const edge of inEdges[idx]) {
    dfs(inEdges, edge, finished); // move up
    inEdges[idx] = new Set([...inEdges[idx], ...inEdges[edge]]); // merge
  }
  finished[idx] = 1;
};
const getAncestors = (n, edges) => {
  const inEdges = Array.from({ length: n }, () => new Set());
  const outdegrees = new Uint16Array(n);
  const finished = new Uint8Array(n);
  // init information
  for (const [from, to] of edges) {
    inEdges[to].add(from);
    ++outdegrees[from];
  }
  for (let i = 0; i < n; ++i) {
	// start dfs from every leaf node
    outdegrees[i] == 0 && dfs(inEdges, i, finished);
  }
  return inEdges.map(set => Array.from(set).sort((a, b) => a - b));
};
