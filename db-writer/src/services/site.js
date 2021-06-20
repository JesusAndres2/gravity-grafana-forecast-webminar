const DataServices = require("../data-services/");

/**
  Create site in DB if not exists.

  @param name
  @param latitude
  @param length

  @return siteId
*/
const createIfNotExists = async (name, length, latitude) => {
  try {
    // find site. If not exists, create one.
    let site = await DataServices.site.findByCoordinates(length, latitude);
    if (!site) {
      console.info(`Site length: ${length} and latitude ${latitude} does not exists. Creating it...`);
      site = await DataServices.site.create(name, length, latitude);
    }
    console.info(`Managing site: ${JSON.stringify(site)}`);
    return site.dataValues.id;
  } catch (e) {
    console.error(`Error creating site if not exists. Stack Trace: ${e}`);
    throw new Error(`Error creating site if not exists. Stack Trace: ${e}`)
  }
};

module.exports = { createIfNotExists };
