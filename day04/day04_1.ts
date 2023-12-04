import { readFileLines } from "../utils";
import { mapCardEntry } from "./shared";

export function day04_1(mode: "test1" | "input") {
  const data = readFileLines(`${__dirname}/${mode}.txt`);

  return data
    .map(mapCardEntry)
    .map((card) => {
      const prizeNumbers = card.winningNumbers.filter((number) =>
        card.numbers.includes(number)
      );

      return {
        ...card,
        prizeNumbers,
        points: getCardPoints(prizeNumbers),
      };
    })
    .reduce((acc, prizedCard) => acc + prizedCard.points, 0);
}

function getCardPoints(prizeNumbers: string[]) {
  return prizeNumbers.length === 0 ? 0 : Math.pow(2, prizeNumbers.length - 1);
}
