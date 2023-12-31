import { readFileLines } from "../utils";
import { toPuzzleEntry, toReducedSequence } from "./shared";

export function day09_1(mode: "input" | "test1") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`);

  return rawData
    .map(toPuzzleEntry)
    .map(toReducedSequence)
    .map(toNextSequenceNumber)
    .reduce((acc, number) => acc+number,0);
}

function toNextSequenceNumber(reducedSequence: number[][]) {
  return reducedSequence
    .reverse()
    .reduce((acc, sequendeData) => acc + sequendeData.pop()!, 0);
}
