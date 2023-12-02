import { readFileLines } from "../utils";

export function day1(mode: "test1" | "test2" | "input") {
  const data = readFileLines(`${__dirname}/${mode}.txt`);

  return data
    .map((line) => {
      const firstDigit = convertStringsToNumbers(line.match(
        /(\d|one|two|three|four|five|six|seven|eight|nine).*/
      )![1]);

      const lastDigit = convertStringsToNumbers(line.match(
        /.*(\d|one|two|three|four|five|six|seven|eight|nine)/
      )![1]);

      return parseInt(`${firstDigit}${lastDigit}`);
    })
    .reduce((val, acc) => val + acc, 0);
}

function convertStringsToNumbers(number: string): string {
  const numbers = [
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["six", "6"],
    ["seven", "7"],
    ["eight", "8"],
    ["nine", "9"],
  ]
  const num = numbers.find(e => e[0] === number);
  return num ? num[1] : number;
}
