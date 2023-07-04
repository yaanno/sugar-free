export interface PointType {
  x: number;
  y: number;
}

export function Point(spec: PointType) {
  const { x, y } = spec ?? 0;

  const displayName = "Point";

  function distance(b: PointType) {
    const dx = x - b.x;
    const dy = y - b.y;

    return Math.hypot(dx, dy);
  }
  return Object.freeze({
    displayName,
    distance,
    x,
    y,
  });
}

const p1 = Point({ x: 5, y: 5 });
const p2 = Point({ x: 10, y: 10 });

// TODO: difference here
console.log(p1.displayName);
console.log(p1.distance(p2));
console.log(p2.displayName);
console.log(p2.distance(p1));
