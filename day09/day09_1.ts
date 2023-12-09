import { readFileLines } from "../utils";

export function day09_1(mode: "input" | "test1") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`);

  return rawData
    .map(toPuzzleEntry)
    .map(toReducedSequence)
    .map(toNextSequenceNumber)
    .reduce((acc, number) => acc+number,0);
}

function toPuzzleEntry(line: string): number[] {
  return line.split(" ").map(Number);
}

function toReducedSequence(sequence: number[]) {
  const reducedSequence = [sequence];

  while (!reducedSequence[reducedSequence.length - 1].every((n) => n === 0)) {
    const lastTerm = reducedSequence[reducedSequence.length - 1];
    const nextTerm: number[] = [];

    let prevNumber = lastTerm[0];
    for (let i = 1; i < lastTerm.length; i++) {
      const nextNumber = lastTerm[i];

      nextTerm.push(nextNumber - prevNumber);

      prevNumber = nextNumber;
    }

    reducedSequence.push(nextTerm);
  }

  return reducedSequence;
}

function toNextSequenceNumber(reducedSequence: number[][]) {
  return reducedSequence
    .reverse()
    .reduce((acc, sequendeData) => acc + sequendeData.pop()!, 0);
}
