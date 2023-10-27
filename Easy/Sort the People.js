var sortPeople = function(names, heights) {
     let sortedArr = [...heights].sort((a, b) => b - a);
    let res = [];
    for (let i = 0; i < sortedArr.length; i++) {
      res.push(names[heights.indexOf(sortedArr[i])]);
    }
    return res;
};