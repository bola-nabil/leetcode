var canTraverseAllPairs = function (nums) {
  const numElements = nums.length;
  if (numElements === 1) return true;

  const disjointSet = Array.from({ length: numElements }, (_, index) => index);
  const setSize = Array(numElements).fill(1);
  const factorFirstOccurrence = new Map();

  function findSetLeader(x) {
    if (disjointSet[x] === x) return x;
    disjointSet[x] = findSetLeader(disjointSet[x]);
    return disjointSet[x];
  }

  function unionSets(x, y) {
    const xLeader = findSetLeader(x);
    const yLeader = findSetLeader(y);
    if (xLeader === yLeader) return;
    if (setSize[xLeader] < setSize[yLeader]) {
      disjointSet[xLeader] = yLeader;
      setSize[yLeader] += setSize[xLeader];
    } else {
      disjointSet[yLeader] = xLeader;
      setSize[xLeader] += setSize[yLeader];
    }
  }

  for (let i = 0; i < numElements; i++) {
    let num = nums[i];
    let divisor = 2;
    while (divisor * divisor <= num) {
      if (num % divisor === 0) {
        if (factorFirstOccurrence.has(divisor)) {
          unionSets(i, factorFirstOccurrence.get(divisor));
        } else {
          factorFirstOccurrence.set(divisor, i);
        }
        while (num % divisor === 0) {
          num /= divisor;
        }
      }
      divisor++;
    }
    if (num > 1) {
      if (factorFirstOccurrence.has(num)) {
        unionSets(i, factorFirstOccurrence.get(num));
      } else {
        factorFirstOccurrence.set(num, i);
      }
    }
  }

  return setSize[findSetLeader(0)] === numElements;
};
