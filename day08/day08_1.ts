import { readFileLines } from "../utils";

export function day08_1(mode: "input" | "test1" | "test2") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`);
  const { instructions, routes } = parseRawData(rawData);

  let steps = 0;
  let currentLocation = "AAA";

  while (currentLocation !== "ZZZ") {
    instructions.forEach((i) => {
      const currentLocationRoute = routes.get(currentLocation)!;
      currentLocation =
        i === "R" ? currentLocationRoute.right : currentLocationRoute.left;
      steps++;
    });
  }

  return steps;
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
