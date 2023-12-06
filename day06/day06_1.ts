import { readFileLines } from "../utils";

type Race = {
  time: number;
  distance: number;
};

export function day06_1(mode: "input" | "test1") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`);

  return mapRawData(rawData)
    .map((race) => resolveQuadraticInequality(race.time, race.distance))
    .map(toRaceTime)
    .reduce((acc, raceTime) => {
      return acc * (raceTime.maxTime - raceTime.minTime + 1);
    }, 1);
}

function mapRawData(data: string[]): Race[] {
  const times = data[0].match(/\d+/g)!;
  const distances = data[1].match(/\d+/g)!;

  return times.map((time, index) => ({
    time: Number(time),
    distance: Number(distances[index]),
  }));
}

function resolveQuadraticInequality(time: number, distance: number) {
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

function toRaceTime({ min, max }: { min: number; max: number }) {
  return {
    minTime: Number.isInteger(min) ? min + 1 : Math.ceil(min),
    maxTime: Number.isInteger(max) ? max - 1 : Math.floor(max),
  };
}
