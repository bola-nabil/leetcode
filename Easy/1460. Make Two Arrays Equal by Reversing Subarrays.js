var canBeEqual = function (arr, arr1) {
  const data = new Object();
  for (let i = 0; i < arr.length; ++i) {
    data[arr[i]] = data[arr[i]] + 1 || 1;
  }

  for (let i = 0; i < arr1.length; ++i) {
    if (data.hasOwnProperty(arr1[i]) === false) return false;
    if (data.hasOwnProperty(arr1[i]) === true) {
      if (data[arr1[i]] <= 0) return false;
      data[arr1[i]] = data[arr1[i]] - 1;
    }
  }
  return true;
};
