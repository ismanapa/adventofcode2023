import { readFileLines } from "../utils";

type Symbol = {
  symbol: string;
  rowIndex: number;
  index: number;
};

type Number = {
  number: number;
  row: number;
  position: number;
  endPosition: number;
};

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

const mapNumbersInfoInRow = (row: string, rowIndex: number) => {
  const regex = /\d+/g;
  const matches: Number[] = [];
  let match;

  while ((match = regex.exec(row)) !== null) {
    const number = match[0];
    const position = match.index;
    matches.push({
      number: parseInt(number),
      position,
      endPosition: position + number.length - 1,
      row: rowIndex,
    });
  }

  return matches;
};

const findSymbolPositions = (input: string[]) => {
  const positions: Symbol[] = [];

  input.forEach((row, rowIndex) => {
    const items = row.split("");

    items.forEach((item, index) => {
      if (item.match(/[^\w.]/)) {
        positions.push({ rowIndex, index, symbol: item });
      }
    });
  });

  return positions;
};
