import { readFileLines } from "../utils";
import { Race, resolveQuadraticInequality, toRaceTime } from "./shared";

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
