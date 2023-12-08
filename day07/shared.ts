export type Hand = {
  hand: string;
  bid: number;
};

export type ParsedHand = Hand & {
  parsedData: [string, number][];
};
