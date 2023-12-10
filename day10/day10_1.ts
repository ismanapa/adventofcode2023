import { readFileLines } from "../utils";
import { getPipeLoop, getStarterLocation, toMatrix } from "./shared";

export function day10_1(mode: "input" | "test1" | "test2") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`);
  const map = rawData.map(toMatrix);

  const starterLocation = getStarterLocation(map);
  
  const pipeLoop = getPipeLoop(map, starterLocation);

  return pipeLoop.length / 2;
}
