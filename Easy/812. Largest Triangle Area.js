function triangleArea(p1, p2, p3) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = p3;
  return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
}

var largestTriangleArea = function(points) {
  let maxArea = 0;
  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const area = triangleArea(points[i], points[j], points[k]);
        if (area > maxArea)
          maxArea = area;
      }
    }
  }
  return maxArea;
}
