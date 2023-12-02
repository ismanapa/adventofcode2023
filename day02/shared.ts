export type Cubes = {
  red: number;
  green: number;
  blue: number;
};

export type Game = {
  id: number;
  sets: Cubes[];
};

export function sanitizeGameData(data: string): Game {
  const gameId = Number(data.split(": ")[0]?.split(" ")[1]);

  const sets = data
    .split(": ")[1]
    .split("; ")
    .map((set) => {
      const setData = set.split(", ");

      const red = setData.find((s) => s.includes("red"))?.split(" ")[0] ?? 0;
      const blue = setData.find((s) => s.includes("blue"))?.split(" ")[0] ?? 0;
      const green =
        setData.find((s) => s.includes("green"))?.split(" ")[0] ?? 0;

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
