var minLength = function (s) {
  while (s.includes("AB") || s.includes("CD")) {
    if (s.includes("AB")) s = s.replace("AB", "");

    if (s.includes("CD")) s = s.replace("CD", "");
  }

  return s.length;
};
