import { readFileLines } from "../utils";

export function day08_2(mode: "input" | "test3") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`);
  const { instructions, routes } = parseRawData(rawData);

  const startLocations = Array.from(routes)
    .filter((r) => r[0].endsWith("A"))
    .map((r) => r[0]);

  const steps = startLocations.map((location) => {
    let steps = 0;

    while (!location.endsWith("Z")) {
      instructions.forEach((i) => {
        const locationMap = routes.get(location)!;
        location = i === "R" ? locationMap.right : locationMap.left;
        steps++;
      });
    }

    return steps;
  });

  return findLCM(steps);
}

function parseRawData(lines: string[]) {
  const routes = new Map<string, { right: string; left: string }>();
  lines.slice(2).forEach((line) => {
    const zone = line.split(" = ");

    routes.set(zone[0], {
      right: zone[1].split(", ")[1].replace(")", ""),
      left: zone[1].split(", ")[0].replace("(", ""),
    });
  });

  return {
    instructions: lines[0].split(""),
    routes,
  };
}

function findGCD(a: number, b: number) {
  return b === 0 ? a : findGCD(b, a % b);
}

function findLCMOfTwo(a: number, b: number) {
  return (a * b) / findGCD(a, b);
}

function findLCM(numbers: number[]) {
  return numbers.reduce((acc, number) => findLCMOfTwo(acc, number));
}
