export interface PointType {
  x: number;
  y: number;
}

export function Point(spec: PointType) {
  const { x, y } = spec ?? 0;

  const displayName = "Point";

  function distance(a: PointType, b: PointType) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

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
console.log(p1.distance(p1, p2));
