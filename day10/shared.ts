export type Pipe = {
  type: string;
  id: `${number}:${number}`;
};

export function toMatrix(line: string) {
  return line.split("");
}

export function getStarterLocation(pipeMatrix: string[][]): Pipe {
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

export function getPipeNeighbors(map: string[][], pipe: Pipe): Pipe[] {
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

    if (row !== 0 && ["|", "7", "F"].includes(map[row - 1][column])) {
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

export function getPipeLoop(map: string[][], starterLocation: Pipe) {
    const pipeLoop = [starterLocation];
    let isLoopComplete = false;
  
    while (!isLoopComplete) {
      const pipe = pipeLoop[pipeLoop.length - 1];
  
      const pipeNs = getPipeNeighbors(map, pipe);
  
      const nextPipe =
        pipeNs.length === 1
          ? pipeNs[0]
          : pipeNs.find((p) => p.id !== pipeLoop[pipeLoop.length - 2].id);
  
      if (nextPipe?.type === "S") {
        isLoopComplete = true;
        break;
      }
  
      pipeLoop.push(nextPipe!);
    }

    return pipeLoop;
}
