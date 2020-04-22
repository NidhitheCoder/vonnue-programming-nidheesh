findQuadrant = (x, y) => {
  if (x > 0 && y > 0) return "lies in First quadrant";
  else if (x < 0 && y > 0) return "lies in Second quadrant";
  else if (x < 0 && y < 0) return "lies in Third quadrant";
  else if (x > 0 && y < 0) return "lies in Fourth quadrant";
  else if (x === 0 && y > 0) return "lies at positive y axis";
  else if (x === 0 && y < 0) return "lies at negative y axis";
  else if (y === 0 && x < 0) return "lies at negative x axis";
  else if (y === 0 && x > 0) return "lies at positive x axis";
  else return "lies at origin";
};

console.log(findQuadrant(4, -3));
