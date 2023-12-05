import { readFile } from "../utils";
import { AlmanacInfo, mapInfoToTarget, mapRawDataToAlmanac } from "./shared";

export function day05_1(mode: "test1" | "input") {
  const rawData = readFile(`${__dirname}/${mode}.txt`);

  const almanac = mapRawDataToAlmanac(rawData);

  const locations = almanac.seeds.map((seed) => {
    return almanac.maps.reduce((currentId, map) => {
      return mapInfoToTarget(currentId, map.rawRanges);
    }, seed);
  });

  return Math.min(...locations);
}
