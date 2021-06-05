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
  sites: {
    puntaHumbria: {
      length: 37.178056,
      latitud: -6.971944
    },
    marbella: {
      length: 36.506111,
      latitud: -4.883889
    }
  }
};
