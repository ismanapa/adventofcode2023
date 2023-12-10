import { readFileLines } from "../utils";
import { getPipeLoop, getPipeNeighbors, getStarterLocation, toMatrix } from "./shared";

type Point = [number, number];

export function day10_2(mode: "input" | "test3" | "test4" | "test5") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`);
  const map = rawData.map(toMatrix);

  const starterLocation = getStarterLocation(map);
  const pipeLoop = getPipeLoop(map, starterLocation);
  
  const polygon = pipeLoop.map(
    (p) => p.id.split(":").map(Number) as Point
  );

  // not the best solution but I am tired xD
  return map
    .flatMap((line, row) =>
      line.map((e, column) => [row, column] as Point)
    )
    .filter((point) =>
      !polygon.some((p) => p[0] === point[0] && p[1] === point[1])
    )
    .reduce((acc, groundTile) => {
      if (pointInPolygon(groundTile, polygon)) {
        acc++;
      }

      return acc;
    }, 0);
}

// raycast method
function pointInPolygon(point: Point, polygon: Point[]) {
  var x = point[0],
    y = point[1];
  var inside = false;

  for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    var xi = polygon[i][0],
      yi = polygon[i][1];
    var xj = polygon[j][0],
      yj = polygon[j][1];

    var intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
}
