const R = require("ramda");
const vars = require("../config/vars");

/**
 * Transform result from api datasource in an array of key and values.
 * @param {*} data
 * @returns [{key1: value1, key2: value2},...]
 */
const toKeyValue = data => {
  const { hours } = data;
  const result = hours.map(sample => {
    const mappedItem = {};
    Object.keys(sample).forEach(key => {
      if (typeof sample[key] !== "string") {
        mappedItem[key] = sample[key][vars.sources.stormGlass];
      } else {
        mappedItem[key] = sample[key];
      }
    });
    return mappedItem;
  });
  return result;
};

/**
 * Map both data apis in one key-value array grouped by site
 * @param {*} weatherData
 * @param {*} solarData
 * @param {*} site
 * @returns
 */
const mapData = (weatherData, solarData, site) => {
  const wheaterKeyvalue = toKeyValue(weatherData);
  const solarKeyValue = toKeyValue(solarData);
  // same site data were provided in distinct apis. Now, merge both data by sample time
  const wheaterGroupBy = R.groupBy(R.prop("time"), wheaterKeyvalue);
  const dataMerged = R.map(
    solarSample => R.merge(solarSample, wheaterGroupBy[solarSample.time][0]), solarKeyValue);
  return {
    site,
    data: dataMerged
  };
};

module.exports = mapData;
