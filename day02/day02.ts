import { readFileLines } from "../utils";

type Cubes = {
  red: number;
  green: number;
  blue: number;
};

type Game = {
  id: number;
  sets: Cubes[];
};

export function day02(mode: "test1" | "input", cubes: Cubes) {
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

function sanitizeGameData(data: string): Game {
  const gameId = Number(data.split(": ")[0]?.split(" ")[1]);

  const sets = data
    .split(": ")[1]
    .split("; ")
    .map((set) => {
      const setData = set.split(", ");

      const red = setData.find((s) => s.includes("red"))?.split(" ")[0] ?? 0;
      const blue = setData.find((s) => s.includes("blue"))?.split(" ")[0] ?? 0;
      const green = setData.find((s) => s.includes("green"))?.split(" ")[0] ?? 0;

      return {
        red: Number(red),
        blue: Number(blue),
        green: Number(green),
      };
    });

  return {
    id: gameId,
    sets,
  };
}
