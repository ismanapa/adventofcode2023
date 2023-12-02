import { readFileLines } from "../utils";
import { Cubes, sanitizeGameData } from "./shared";


export function day02_1(mode: "test1" | "input", cubes: Cubes) {
  const data = readFileLines(`${__dirname}/${mode}.txt`);

  return data
    .map(sanitizeGameData)
    .filter((game) => {
      return game.sets.every(
        (set) =>
          set.blue <= cubes.blue &&
          set.green <= cubes.green &&
          set.red <= cubes.red
      );
    })
    .reduce((acc, game) => {
      return acc + game.id;
    }, 0);
}

