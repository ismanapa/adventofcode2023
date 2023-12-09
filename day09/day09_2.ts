import { readFileLines } from "../utils";
import { toPuzzleEntry, toReducedSequence } from "./shared";

export function day09_2(mode: "input" | "test1") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`);

  return rawData
    .map(toPuzzleEntry)
    .map(toReducedSequence)
    .map(toPrevSequenceNumber)
    .reduce((acc, number) => acc+number,0);
}

function toPrevSequenceNumber(reducedSequence: number[][]) {
  return reducedSequence
    .reverse()
    .reduce((acc, sequendeData) => sequendeData.shift()! - acc, 0);
}