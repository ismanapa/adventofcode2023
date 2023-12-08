import { readFileLines } from "../utils";
import { orderedLabels } from "./shared";

type Hand = {
  hand: string;
  bid: number;
};

type ParsedHand = Hand & {
  parsedData: [string, number][];
};

export function day07_1(mode: "input" | "test1") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`);

  const d = parseData(rawData)
    .map(toParsedHand)
    .map((parsedHand) => {
      return {
        ...parsedHand,
        handValueByType: getHandPointsByType(parsedHand),
        handValueByLabel: getHandPointsByLabels(parsedHand),
      };
    })
    .sort((a, b) => {
      if (b.handValueByType === a.handValueByType) {
        return a.handValueByLabel - b.handValueByLabel;
      }

      return a.handValueByType - b.handValueByType;
    });

    console.log(d)


    return d
    .reduce((acc, hand, index) => {
      return acc + hand.bid * (index + 1);
    }, 0);
}

function parseData(lines: string[]): Hand[] {
  return lines.map((lines) => {
    const data = lines.split(" ");

    return {
      hand: data[0],
      bid: Number(data[1]),
    };
  });
}

function toParsedHand(hand: Hand): ParsedHand {
  const handData = new Map<string, number>();

  hand.hand.split("").forEach((label) => {
    if (!handData.has(label)) {
      handData.set(label, 1);
      return;
    }

    handData.set(label, handData.get(label)! + 1);
  });

  return {
    ...hand,
    parsedData: Array.from(handData).sort((a, b) => b[1] - a[1]),
  };
}

function getHandPointsByType(parsedHand: ParsedHand): number {
  if (parsedHand.parsedData[0][1] === 5) {
    return 600;
  }

  if (parsedHand.parsedData[0][1] === 4) {
    return 500;
  }

  if (parsedHand.parsedData[0][1] === 3 && parsedHand.parsedData[1][1] === 2) {
    return 400;
  }

  if (parsedHand.parsedData[0][1] === 3) {
    return 300;
  }

  if (parsedHand.parsedData[0][1] === 2 && parsedHand.parsedData[1][1] === 2) {
    return 200;
  }

  if (parsedHand.parsedData[0][1] === 2) {
    return 100;
  }

  return 0;
}

function getHandPointsByLabels(parsedHand: ParsedHand): number {
  return parsedHand.hand.split("").reduce((acc, label, index) => {
    return (
      acc + orderedLabels.get(label)! * Number(`1${"00".repeat(5 - index)}`)
    );
  }, 0);
}
