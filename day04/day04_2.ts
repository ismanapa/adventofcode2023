import { readFileLines } from "../utils";
import { mapCardEntry } from "./shared";

export function day04_2(mode: "test1" | "input") {
  const data = readFileLines(`${__dirname}/${mode}.txt`);

  const winningInstances: Record<number, number> = {};

  data
    .map(mapCardEntry)
    .map((card) => {
      const prizeNumbers = card.winningNumbers.filter((number) =>
        card.numbers.includes(number)
      );

      return {
        ...card,
        prizeNumbers,
      };
    })
    .forEach((card) => {
      const numberOfInstances = winningInstances[card.id] ?? 0;

      if (card.winningNumbers.length > 0) {
        winningInstances[card.id] = winningInstances[card.id]
          ? ++winningInstances[card.id]
          : 1;

        for (
          let istanceIndex = 0;
          istanceIndex < numberOfInstances + 1;
          istanceIndex++
        ) {
          for (
            let i = card.id + 1;
            i <= Math.min(card.id + card.prizeNumbers.length, data.length);
            i++
          ) {
            winningInstances[i] = winningInstances[i]
              ? ++winningInstances[i]
              : 1;
          }
        }
      }
    });

  return Object.values(winningInstances).reduce((acc, v) => acc + v, 0);
}
