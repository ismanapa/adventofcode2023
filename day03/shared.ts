export type Symbol = {
  symbol: string;
  rowIndex: number;
  index: number;
};

export type Number = {
  number: number;
  row: number;
  position: number;
  endPosition: number;
};

export const findSymbolPositions = (input: string[]) => {
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

export const mapNumbersInfoInRow = (row: string, rowIndex: number) => {
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
