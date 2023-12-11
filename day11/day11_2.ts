import { readFileLines } from "../utils";

export function day11_2(mode: "input" | "test1" | "test2", ageFactor: number) {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`).map((line) =>
    line.split("")
  );

  const emptyRows = rawData.reduce(reduceToEmptyLineIndexes, []);
  const emptyColumns = rawData
    .map((val, index) => rawData.map((row) => row[index]).reverse())
    .reduce(reduceToEmptyLineIndexes, []);

  const galaxies = rawData.reduce<[number, number][]>((acc, row, rowIndex) => {
    row.forEach((e, columnIndex) => {
      if (e === "#") {
        acc.push([rowIndex, columnIndex]);
      }
    });

    return acc;
  }, []);

  const galaxyPairs = galaxies.flatMap<[[number, number], [number, number]]>(
    (galaxy, index) => {
      return galaxies.slice(index + 1).map((g) => [galaxy, g]);
    }
  );

  return galaxyPairs.reduce((acc, pair) => {
    const rawDistance = distantBetweenGalaxies(pair);

    const emptyRowsBetweenGalaxies = emptyRows.filter(
      (e) => (e > pair[0][0] && e < pair[1][0]) || (e < pair[0][0] && e > pair[1][0])
    );
    const emptyColumnssBetweenGalaxies = emptyColumns.filter(
      (e) => (e > pair[0][1] && e < pair[1][1]) || e < pair[0][1] && e > pair[1][1]
    );

    const galaxyDistance =
      rawDistance +
      (emptyRowsBetweenGalaxies.length > 0
        ? emptyRowsBetweenGalaxies.length * ageFactor - emptyRowsBetweenGalaxies.length 
        : 0) +
      (emptyColumnssBetweenGalaxies.length > 0
        ? emptyColumnssBetweenGalaxies.length * ageFactor - emptyColumnssBetweenGalaxies.length
        : 0);

    return acc + galaxyDistance;
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
