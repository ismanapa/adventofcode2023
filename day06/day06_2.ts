import { readFileLines } from "../utils";
import { Race, resolveQuadraticInequality, toRaceTime } from "./shared";

export function day06_2(mode: "input" | "test1") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`);

  return mapRawData(rawData)
    .map((race) => resolveQuadraticInequality(race.time, race.distance))
    .map(toRaceTime)
    .map((raceTime) => {
      return raceTime.maxTime - raceTime.minTime + 1;
    })
    .at(0);
}

function mapRawData(data: string[]): Race[] {
  const time = data[0].match(/\d+/g)!.join("");
  const distance = data[1].match(/\d+/g)!.join("");

  return [
    {
      time: Number(time),
      distance: Number(distance),
    },
  ];
}
