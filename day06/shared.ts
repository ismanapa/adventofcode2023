export type Race = {
  time: number;
  distance: number;
};

export function resolveQuadraticInequality(time: number, distance: number) {
  // (time - x) * x > distance
  // ax2 + bx + c
  // a = 1, b = -time, c = distance

  let discriminant = time * time - 4 * distance;

  let root1 = (time - Math.sqrt(discriminant)) / 2;
  let root2 = (time + Math.sqrt(discriminant)) / 2;

  return {
    min: root1,
    max: root2,
  };
}

export function toRaceTime({ min, max }: { min: number; max: number }) {
  return {
    minTime: Number.isInteger(min) ? min + 1 : Math.ceil(min),
    maxTime: Number.isInteger(max) ? max - 1 : Math.floor(max),
  };
}
