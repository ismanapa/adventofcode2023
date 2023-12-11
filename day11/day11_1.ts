import { readFileLines } from "../utils";

export function day11_1(mode: "input" | "test1" | "test2") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`).map((line) =>
    line.split("")
  );

  const emptyRows = rawData.reduce(reduceToEmptyLineIndexes, []);
  const emptyColumns = rawData
    .map((val, index) => rawData.map((row) => row[index]).reverse())
    .reduce(reduceToEmptyLineIndexes, []);

  const expandedStarMap = rawData.flatMap((row, rowIndex) => {
    const newRow = row.flatMap((e, i) => {
      if (emptyColumns.includes(i)) {
        return [e, e];
      }

      return [e];
    });

    if (emptyRows.includes(rowIndex)) {
      return [newRow, newRow];
    }

    return [newRow];
  });

  const galaxies = expandedStarMap.reduce<[number, number][]>(
    (acc, row, rowIndex) => {
      row.forEach((e, columnIndex) => {
        if (e === "#") {
          acc.push([rowIndex, columnIndex]);
        }
      });

      return acc;
    },
    []
  );

  const galaxyPairs = galaxies.flatMap<[[number, number], [number, number]]>(
    (galaxy, index) => {
      return galaxies.slice(index + 1).map((g) => [galaxy, g]);
    }
  );

  return galaxyPairs.reduce((acc, pair) => {
    return acc + distantBetweenGalaxies(pair);
  }, 0);
}

function reduceToEmptyLineIndexes(
  acc: number[],
  line: string[],
  index: number
) {
  if (line.every((l) => l === ".")) {
    return acc.concat(index);
  }

  return acc;
}

function distantBetweenGalaxies([g1, g2]: [
  [number, number],
  [number, number]
]) {
  return Math.abs(g1[0] - g2[0]) + Math.abs(g1[1] - g2[1]);
}
