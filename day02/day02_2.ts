import { readFileLines } from "../utils";
import { sanitizeGameData } from "./shared";

export function day02_2(mode: "test1" | "input") {
  const data = readFileLines(`${__dirname}/${mode}.txt`);

  return data
    .map(sanitizeGameData)
    .map((game) =>
      game.sets.reduce(
        (acc, set) => ({
          red: Math.max(acc.red, set.red),
          green: Math.max(acc.green, set.green),
          blue: Math.max(acc.blue, set.blue),
        }),
        { red: 0, green: 0, blue: 0 }
      )
    )
    .map((cubes) => cubes.red * cubes.green * cubes.blue)
    .reduce((acc, power) => {
      return acc + power;
    }, 0);
}
