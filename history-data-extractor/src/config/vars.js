module.exports = {
  baseUrl: "https://api.stormglass.io/v2/",
  apiKey: "",
  paths: {
    solar: "solar/",
    weather: "weather/"
  },
  params: {
    solar: "uvIndex",
    weather:
      "airTemperature,cloudCover,currentSpeed,gust,precipitation,humidity,swellHeight,visibility,waterTemperature,waveHeight,wavePeriod,windSpeed"
  },
  destination: {
    baseUrl: "http://localhost:3000",
    historicalPath: "/historical"
  },
  sources: {
    stormGlass: "sg"
  },
  sites: {
    puntaUmbria: {
      latitude: 37.178056,
      length: -6.971944
    },
    marbella: {
      latitude: 36.506111,
      length: -4.883889
    },
    roquetas: {
      latitude: 36.765,
      length: -2.60222
    },
    cullera: {
      latitude: 39.1713889,
      length: 0.23861111
    },
    castelldefels: {
      latitude: 41.26,
      length: 1.978888888
    },
    suances: {
      latitude: 43.4363889,
      length: -4.04
    },
    puntaSanRoque: {
      latitude: 42.9166667,
      length: -9.2625
    },
    miami: {
      latitude: 25.7602778,
      length: -80.124444
    },
    hawaii: {
      latitude: 19.4019444,
      length: -154.8758333
    },
    sudafrica: {
      latitude: -34.1336111,
      length: 22.4625
    },
    mykonos: {
      latitude: 37.4463889,
      length: 25.325
    }
  },
  loggerLevel: "INFO"
};
