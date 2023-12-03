import { readFileLines } from "../utils";
import { Number, findSymbolPositions, mapNumbersInfoInRow } from "./shared";

export function day03_1(mode: "test1" | "input") {
  const data = readFileLines(`${__dirname}/${mode}.txt`);
  const symbols = findSymbolPositions(data);

  return data
    .reduce<Number[]>((acc, row, rowIndex) => {
      const numbers = mapNumbersInfoInRow(row, rowIndex);

      if (numbers.length == 0) {
        return acc;
      }

      const parts = numbers.filter((number) => {
        const isPart = symbols.some((symbol) => {
          return (
            symbol.rowIndex >= number.row - 1 &&
            symbol.rowIndex <= number.row + 1 &&
            symbol.index >= number.position - 1 &&
            symbol.index <= number.endPosition + 1
          );
        });

        return isPart;
      });

      return acc.concat(...parts);
    }, [])
    .reduce((acc, enginePart) => {
      return acc + enginePart.number;
    }, 0);
}
