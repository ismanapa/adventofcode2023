export type Card = {
  id: number;
  numbers: string[];
  winningNumbers: string[];
};

export function mapCardEntry(line: string): Card {
  const splittedData = line.split("|");

  return {
    id: Number(splittedData[0].split(":")[0].match(/\d+/g)),
    numbers: splittedData[1].match(/\d+/g)!,
    winningNumbers: splittedData[0].split(":")[1].match(/\d+/g)! ?? [],
  };
}
