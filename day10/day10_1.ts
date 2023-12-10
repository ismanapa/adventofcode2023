import { readFileLines } from "../utils";

type Pipe = {
  type: string;
  id: `${number}:${number}`;
};

export function day10_1(mode: "input" | "test1" | "test2") {
  const rawData = readFileLines(`${__dirname}/${mode}.txt`);
  const map = rawData.map(toMatrix);

  const starterLocation = getStarterLocation(map);

  const pipeLoop = [starterLocation];
  let isLoopComplete = false;

  while (!isLoopComplete) {
    const pipe = pipeLoop[pipeLoop.length - 1];

    const pipeNs = getPipeNeighbors(map, pipe);

    const nextPipe = pipeNs.find((p) => !pipeLoop.some((pl) => p.id === pl.id));

    if (!nextPipe) {
      isLoopComplete = true;
    } else {
      pipeLoop.push(nextPipe);
    }
  }

  return pipeLoop.length / 2;
}

function toMatrix(line: string) {
  return line.split("");
}

function getStarterLocation(pipeMatrix: string[][]): Pipe {
  let column = 0;

  const row = pipeMatrix.findIndex((row) => {
    const index = row.findIndex((pipe) => pipe === "S");

    if (index !== -1) {
      column = index;
      return true;
    }

    return false;
  });

  return {
    id: `${row}:${column}`,
    type: "S",
  };
}

function getPipeNeighbors(map: string[][], pipe: Pipe): Pipe[] {
  const [row, column] = pipe.id.split(":").map(Number);

  if (pipe.type === "-") {
    return [
      {
        id: `${row}:${column - 1}`,
        type: map[row][column - 1],
      },
      {
        id: `${row}:${column + 1}`,
        type: map[row][column + 1],
      },
    ];
  }

  if (pipe.type === "7") {
    return [
      {
        id: `${row}:${column - 1}`,
        type: map[row][column - 1],
      },
      {
        id: `${row + 1}:${column}`,
        type: map[row + 1][column],
      },
    ];
  }

  if (pipe.type === "|") {
    return [
      {
        id: `${row - 1}:${column}`,
        type: map[row - 1][column],
      },
      {
        id: `${row + 1}:${column}`,
        type: map[row + 1][column],
      },
    ];
  }

  if (pipe.type === "J") {
    return [
      {
        id: `${row - 1}:${column}`,
        type: map[row - 1][column],
      },
      {
        id: `${row}:${column - 1}`,
        type: map[row][column - 1],
      },
    ];
  }

  if (pipe.type === "L") {
    return [
      {
        id: `${row - 1}:${column}`,
        type: map[row - 1][column],
      },
      {
        id: `${row}:${column + 1}`,
        type: map[row][column + 1],
      },
    ];
  }

  if (pipe.type === "F") {
    return [
      {
        id: `${row}:${column + 1}`,
        type: map[row][column + 1],
      },
      {
        id: `${row + 1}:${column}`,
        type: map[row + 1][column],
      },
    ];
  }

  if (pipe.type === "S") {
    if (["-", "7", "J"].includes(map[row][column + 1])) {
      return [
        {
          id: `${row + 1}:${column}`,
          type: map[row + 1][column],
        },
      ];
    }

    if (["|", "7", "F"].includes(map[row - 1][column])) {
      return [
        {
          id: `${row - 1}:${column}`,
          type: map[row - 1][column],
        },
      ];
    }

    if (["|", "J", "L"].includes(map[row + 1][column])) {
      return [
        {
          id: `${row + 1}:${column}`,
          type: map[row + 1][column],
        },
      ];
    }

    if (["-", "F", "L"].includes(map[row][column - 1])) {
      return [
        {
          id: `${row - 1}:${column}`,
          type: map[row - 1][column],
        },
      ];
    }
  }

  throw new Error("No pipe type available");
}
