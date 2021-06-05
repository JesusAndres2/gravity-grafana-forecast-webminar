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
  }
};
