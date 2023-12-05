const fs = require('fs');

function findLowestLocation(seeds, seedToSoilMap, soilToFertilizerMap, fertilizerToWaterMap, waterToLightMap, lightToTemperatureMap, temperatureToHumidityMap, humidityToLocationMap) {
  function convertNumber(number, conversionMap) {
    for (const [destStart, sourceStart, rangeLength] of conversionMap) {
      if (number >= sourceStart && number < sourceStart + rangeLength) {
        return destStart + (number - sourceStart);
      }
    }
    return number; // If not found, return the same number
  }

  let currentNumber;
  const locations = [];
  for (const seed of seeds) {
    currentNumber = convertNumber(seed, seedToSoilMap);
    currentNumber = convertNumber(currentNumber, soilToFertilizerMap);
    currentNumber = convertNumber(currentNumber, fertilizerToWaterMap);
    currentNumber = convertNumber(currentNumber, waterToLightMap);
    currentNumber = convertNumber(currentNumber, lightToTemperatureMap);
    currentNumber = convertNumber(currentNumber, temperatureToHumidityMap);
    currentNumber = convertNumber(currentNumber, humidityToLocationMap);
    locations.push(currentNumber);
  }
  console.log(locations);
  let lowestpos = currentNumber+1;
  for (const position in locations) {
    console.log(locations[position]);
    if (locations[position]<lowestpos) lowestpos = position;
  }
  return locations[lowestpos];
}

function parseInput(input) {
  const sections = input.split('\n\n');

  const seeds = sections[0].trim().split(' ').map(Number);

  function parseMap(mapStr) {
    return mapStr.trim().split('\n').map(line => line.split(' ').map(Number));
  }

  const seedToSoilMap = parseMap(sections[1]);
  const soilToFertilizerMap = parseMap(sections[2]);
  const fertilizerToWaterMap = parseMap(sections[3]);
  const waterToLightMap = parseMap(sections[4]);
  const lightToTemperatureMap = parseMap(sections[5]);
  const temperatureToHumidityMap = parseMap(sections[6]);
  const humidityToLocationMap = parseMap(sections[7]);

  return {
    seeds,
    seedToSoilMap,
    soilToFertilizerMap,
    fertilizerToWaterMap,
    waterToLightMap,
    lightToTemperatureMap,
    temperatureToHumidityMap,
    humidityToLocationMap,
  };
}

// Read input.txt file
const input = fs.readFileSync('input.txt', 'utf-8');

// Parse the input
const inputData = parseInput(input);

// Find the lowest location
const lowestLocation = findLowestLocation(
  inputData.seeds,
  inputData.seedToSoilMap,
  inputData.soilToFertilizerMap,
  inputData.fertilizerToWaterMap,
  inputData.waterToLightMap,
  inputData.lightToTemperatureMap,
  inputData.temperatureToHumidityMap,
  inputData.humidityToLocationMap
);

console.log("Lowest Location:", lowestLocation);
