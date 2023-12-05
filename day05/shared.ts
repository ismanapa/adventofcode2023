export type AlmanacInfo = [number, number, number];

export type AlmanacMap = {
  rawRanges: AlmanacInfo[];
  //   map: Record<number, number>;
};

export type Almanac = {
  seeds: number[];
  maps: AlmanacMap[];
  //   seedToSoilMap: AlmanacMap;
  //   soilToFertilizer: AlmanacMap;
  //   fertilizerToWater: AlmanacMap;
  //   waterToLight: AlmanacMap;
  //   lightToTemperature: AlmanacMap;
  //   temperatureToHumidity: AlmanacMap;
  //   humidityToLocation: AlmanacMap;
};

export function mapRawDataToAlmanac(data: string): Almanac {
  const splittedData = data.split(":");

  const seedToSoilRawRange = processMapRawData(splittedData[2]);
  const soilToFertilizerRawRange = processMapRawData(splittedData[3]);
  const fertilizerToWaterRawRange = processMapRawData(splittedData[4]);
  const waterToLightRawRange = processMapRawData(splittedData[5]);
  const lightToTemperatureRawRange = processMapRawData(splittedData[6]);
  const temperatureToHumidityRawRange = processMapRawData(splittedData[7]);
  const humidityToLocationRawRange = processMapRawData(splittedData[8]);

  return {
    seeds: splittedData[1].match(/\d+/g)!.map(Number),
    maps: [
      {
        rawRanges: seedToSoilRawRange,
        // map: generateRangeFromRawRange(seedToSoilRawRange),
      },
      {
        rawRanges: soilToFertilizerRawRange,
        // map: generateRangeFromRawRange(soilToFertilizerRawRange),
      },
      {
        rawRanges: fertilizerToWaterRawRange,
        // map: generateRangeFromRawRange(fertilizerToWaterRawRange),
      },
      {
        rawRanges: waterToLightRawRange,
        // map: generateRangeFromRawRange(waterToLightRawRange),
      },
      {
        rawRanges: lightToTemperatureRawRange,
        // map: generateRangeFromRawRange(lightToTemperatureRawRange),
      },
      {
        rawRanges: temperatureToHumidityRawRange,
        // map: generateRangeFromRawRange(temperatureToHumidityRawRange),
      },
      {
        rawRanges: humidityToLocationRawRange,
        // map: generateRangeFromRawRange(humidityToLocationRawRange),
      },
    ],
  };
}

function processMapRawData(raw: string): AlmanacInfo[] {
  return raw
    .split("\n")
    .map((d) => d.match(/\d+/g)!)
    .filter((d) => d != null)
    .map((d) => d.map(Number) as AlmanacInfo);
}

export function mapInfoToTarget(originId: number, ranges: AlmanacInfo[]) {
  let targetId;

  ranges.forEach((range) => {
    const source = range[1];
    const destination = range[0];
    const length = range[2];

    if (originId < source + length && originId >= source) {
      targetId = destination + (originId - source);
    }
  });

  if (!targetId) {
    targetId = originId;
  }

  return targetId;
}

// deprecated
function generateRangeFromRawRange(rawRange: AlmanacInfo[]) {
  const transformMap: Record<number, number> = {};

  rawRange.forEach((range) => {
    const source = range[1];
    const destination = range[0];
    const length = range[2];

    for (let i = 0; i < length; i++) {
      transformMap[source + i] = destination + i;
    }
  });

  for (let i = 0; i < 99; i++) {
    if (!transformMap[i]) {
      transformMap[i] = i;
    }
  }

  return transformMap;
}
