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
      "airTemperature,cloudCover,currentSpeed,gust,humidity,swellHeight,swellPeriod,visibility,waterTemperature,waveHeight,wavePeriod,windSpeed"
  },
  destination: {
    baseUrl: "http://localhost:8081",
    historicalPath: "/historical"
  },
  sources: {
    stormGlass: "sg"
  },
  sites: {
    puntaHumbria: {
      length: 37.178056,
      latitude: -6.971944
    },
    marbella: {
      length: 36.506111,
      latitude: -4.883889
    }
  },
  loggerLevel: "INFO"
};
