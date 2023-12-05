import { readFile } from "../utils";
import { AlmanacInfo, mapRawDataToAlmanac } from "./shared";

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

function mapInfoToTarget(originId: number, ranges: AlmanacInfo[]) {
  let targetId;

  ranges.forEach((range) => {
    const source = range[1];
    const destination = range[0];
    const length = range[2];

    if (originId <= source + length && originId >= source) {
      targetId = destination + (originId - source);
    }
  });

  if (!targetId) {
    targetId = originId;
  }

  return targetId;
}
