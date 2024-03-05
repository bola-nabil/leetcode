var minimumLength = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) break;

    let commonChar = s[left];

    while (left <= right && s[left] === commonChar) {
      left++;
    }

    while (left <= right && s[right] === commonChar) {
      right--;
    }
  }

  return right - left + 1;
};
