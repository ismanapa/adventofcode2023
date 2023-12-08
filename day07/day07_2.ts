import { readFileLines } from "../utils";
import { Hand, ParsedHand } from "./shared";

export function day07_2(mode: "input" | "test1") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`);

  return parseData(rawData)
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
    })
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
  const numberOfJokers =
    parsedHand.parsedData.find((d) => d[0] === "J")?.[1] || 0;

  const parsedDataWithoutJokers = parsedHand.parsedData.filter(
    (h) => h[0] !== "J"
  );

  if (
    numberOfJokers === 5 ||
    parsedDataWithoutJokers[0][1] + numberOfJokers === 5
  ) {
    return 600;
  }

  if (parsedDataWithoutJokers[0][1] + numberOfJokers === 4) {
    return 500;
  }

  if (
    parsedDataWithoutJokers[0][1] + numberOfJokers === 3 &&
    parsedHand.parsedData[1][1] === 2
  ) {
    return 400;
  }

  if (parsedDataWithoutJokers[0][1] + numberOfJokers === 3) {
    return 300;
  }

  if (
    parsedDataWithoutJokers[0][1] + numberOfJokers === 2 &&
    parsedHand.parsedData[1][1] === 2
  ) {
    return 200;
  }

  if (parsedDataWithoutJokers[0][1] + numberOfJokers === 2) {
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

// A, K, Q, J, T, 9, 8, 7, 6, 5, 4, 3, or 2
const orderedLabels = new Map<string, number>();
orderedLabels.set("A", 14);
orderedLabels.set("K", 13);
orderedLabels.set("Q", 12);
orderedLabels.set("T", 10);
orderedLabels.set("9", 9);
orderedLabels.set("8", 8);
orderedLabels.set("7", 7);
orderedLabels.set("6", 6);
orderedLabels.set("5", 5);
orderedLabels.set("4", 4);
orderedLabels.set("3", 3);
orderedLabels.set("2", 2);
orderedLabels.set("J", 1);
