const myArgs = 1;
const { buildSetup, createFiles, createMetaData } = require("./canvas");
const { defaultEdition } = require("../NFTlayer/config");
const edition = myArgs.length > 0 ? Number(myArgs[0]) : defaultEdition;

const generate_art = async (additionalDet) => {
  buildSetup();
  createFiles(myArgs, additionalDet);
  createMetaData();
};

// generate_art();

module.exports = { generate_art };
