var leastInterval = function(tasks, n) {
  let m = new Map();
  let maxVal = 0, maxValCount = 0;
  
  for(let k of tasks){
    let tVal = m.has(k) ? m.get(k)+1: 1;
    m.set(k, tVal);
    if(tVal > maxVal){
      maxVal = tVal;
      maxValCount = 1;
    } else if(tVal === maxVal)
      maxValCount++;
  }
  
  return Math.max(tasks.length, (maxVal - 1) * (n + 1) + maxValCount);
};
