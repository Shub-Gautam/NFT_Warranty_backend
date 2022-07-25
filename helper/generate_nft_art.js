// const myArgs = 5;
const { buildSetup, createFiles, createMetaData } = require("./canvas");
// const { defaultEdition } = require("../input/config");
// const edition = myArgs.length > 0 ? Number(myArgs[0]) : defaultEdition;

const generate_art = () => {
  buildSetup();
  createFiles(edition);
  //   createMetaData();
};

module.exports = generate_art;
