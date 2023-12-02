import { readFileLines } from "../utils";

export function day1(mode: "test1" | "test2" | "input") {
  const data = readFileLines(`${__dirname}/${mode}.txt`);

  return data
    .map((line) => {
      const formattedLine = convertStringsToNumbers(sanitize(line));
      const value = parseInt(
        `${getNumberFromLeft(formattedLine)}${getNumberFromRight(
          formattedLine
        )}`
      );
      return value;
    })
    .reduce((val, acc) => val + acc, 0);
}

function getNumberFromLeft(line: string): string {
  const el = line.split("").find((char) => !isNaN(parseInt(char)));
  return el!;
}

function getNumberFromRight(line: string): string {
  const el = line
    .split("")
    .reverse()
    .find((char) => !isNaN(parseInt(char)));
  return el!;
}

function sanitize(input: string): string {
    return input
        .replaceAll('eightwo', 'eighttwo')
        .replaceAll('twone', 'twoone')
        .replaceAll('nineight', 'nineeight')
        .replaceAll('threeight', 'threeeight')
        .replaceAll('sevenine', 'sevennine')
        .replaceAll('oneight', 'oneeight')
        .replaceAll('fiveight', 'fiveeight')
}

function convertStringsToNumbers(line: string): string {
  const numbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let indexes = getIndexesOfNumber(line, numbers);

  while (indexes.some((i) => i != -1)) {
    const lowerIndexPosition = indexes.indexOf(
      Math.min(...indexes.filter((i) => i !== -1))
    );
    line = line.replace(
      numbers[lowerIndexPosition],
      (lowerIndexPosition + 1).toString()
    );
    indexes = getIndexesOfNumber(line, numbers);
  }

  return line;
}

function getIndexesOfNumber(line: string, numbers: string[]): number[] {
  const indexes: number[] = [];

  numbers.forEach((number, index) => {
    indexes[index] = line.indexOf(number);
  });

  return indexes;
}
