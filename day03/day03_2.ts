import { readFileLines } from "../utils";
import { findSymbolPositions, mapNumbersInfoInRow } from "./shared";

export function day03_2(mode: "test2" | "input") {
  const data = readFileLines(`${__dirname}/${mode}.txt`);

  const symbols = findSymbolPositions(data);

  return symbols
    .filter((symbol) => symbol.symbol === "*")
    .reduce<number[]>((acc, symbol) => {
      const numbersInAdjacentsRows = [
        ...mapNumbersInfoInRow(data[symbol.rowIndex - 1], symbol.rowIndex - 1),
        ...mapNumbersInfoInRow(data[symbol.rowIndex], symbol.rowIndex),
        ...mapNumbersInfoInRow(data[symbol.rowIndex + 1], symbol.rowIndex + 1),
      ];

      const numbersAdjacent = numbersInAdjacentsRows.filter((number) => {
        return (
          number.position - 1 <= symbol.index &&
          number.endPosition + 1 >= symbol.index
        );
      });

      if (numbersAdjacent.length < 2) {
        return acc;
      }

      return acc.concat(
        numbersAdjacent.reduce((acc, num) => acc * num.number, 1)
      );
    }, [])
    .reduce((acc, number) => acc + number, 0);
}
