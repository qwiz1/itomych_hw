const circle = { x: 0, y: 0, r: 6 };
const point = { x: 4, y: 4 };

function isPointBelongToCircle(circle, point) {
  const dx = point.x - circle.x;
  const dy = point.y - circle.y;
  const dist = Math.hypot(dy, dx);
  if (dist <= circle.r) return true;
  return false;
}

console.log(isPointBelongToCircle(circle, point));
