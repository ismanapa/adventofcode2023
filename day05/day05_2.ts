import { readFile } from "../utils";
import { AlmanacInfo, mapInfoToTarget, mapRawDataToAlmanac } from "./shared";

export function day05_2(mode: "test1" | "input") {
  const rawData = readFile(`${__dirname}/${mode}.txt`);

  const almanac = mapRawDataToAlmanac(rawData);

  const seedGroups = chunk(almanac.seeds, 2);

  let lowerLocation;

  seedGroups.forEach((seedGroup) => {
    const startSeed = seedGroup[0];
    const legth = seedGroup[1];

    for (let i = startSeed; i < startSeed + legth; i++) {
      const seedLocation = almanac.maps.reduce((currentId, map) => {
        return mapInfoToTarget(currentId, map.rawRanges);
      }, i);

      if (!lowerLocation || seedLocation < lowerLocation) {
        lowerLocation = seedLocation;
      }
    }
  });

  return lowerLocation;
}

// https://stackoverflow.com/a/13255738
function chunk<T>(array: T[], size: number): T[][] {
  let results: T[][] = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
}
