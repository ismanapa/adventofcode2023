import { readFileLines } from "../utils";

export function day1(mode: "test" | "input") {
  const data = readFileLines(`${__dirname}/${mode}.txt`);

  return data.map((line) => {
    return parseInt(`${getNumberFromLeft(line)}${getNumberFromRight(line)}`)
  })
  .reduce((val, acc) => (val+acc), 0);
}

function getNumberFromLeft(line: string): string {
    const el = line.split("").find(char => !isNaN(parseInt(char)));
    return el!;
}

function getNumberFromRight(line: string): string {
    const el = line.split("").reverse().find(char => !isNaN(parseInt(char)));
    return el!;
}
