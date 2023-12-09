export function toPuzzleEntry(line: string): number[] {
  return line.split(" ").map(Number);
}

export function toReducedSequence(sequence: number[]) {
  const reducedSequence = [sequence];

  while (!reducedSequence[reducedSequence.length - 1].every((n) => n === 0)) {
    const lastTerm = reducedSequence[reducedSequence.length - 1];
    const nextTerm: number[] = [];

    let prevNumber = lastTerm[0];
    for (let i = 1; i < lastTerm.length; i++) {
      const nextNumber = lastTerm[i];

      nextTerm.push(nextNumber - prevNumber);

      prevNumber = nextNumber;
    }

    reducedSequence.push(nextTerm);
  }

  return reducedSequence;
}
