const weatherData = {
  temp: [22, 26, 27],
  rainfall: [0, 10, 8],
  time: [12.3, 1.3, 2.3],
  wind: [13, 5, 8],
};

// [{ time: 12.3 }, { temp: 22, rainfall: 0, wind: 13 }],
// [({ time: 1.3 }, { temp: 26, rainfall: 10, wind: 5 })],
// [({ time: 2.3 }, { temp: 27, rainfall: 8, wind: 8 })];

//Create desire data

function processData(weatherData) {
  const info = function (times, values) {
    // console.log(times, values);
    times.forEach((time, timeIndex) => {
      // console.log(time, timeIndex);
      const objectProperties = {};
      // console.log(Object.keys(values));
      Object.keys(values).forEach((property) => {
        // console.log(property);
        objectProperties[property] = values[property][timeIndex];
      });
      console.log(objectProperties);
    });
  };
  const data = info(weatherData.time, {
    tempCode: weatherData.temp,
    rainfallCode: weatherData.rainfall,
    wind: weatherData.wind,
  });
} // first create parameters,  1.

processData(weatherData);
