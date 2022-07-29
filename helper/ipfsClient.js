/* import moralis */
const Moralis = require("moralis/node");
const { create } = require("ipfs-http-client");
const fs = require("fs");

/* Moralis init code */
const serverUrl = `${process.env.MORALIS_SERVER_URL}`;
const appId = `${process.env.MORALIS_APP_ID}`;
const masterKey = `${process.env.MORALIS_MASTER_KEY}`;

// Moralis.start({ serverUrl, appId, masterKey });

const projectId = `${process.env.INFURA_PROJECT_ID}`;
const projectSecret = `${process.env.INFURA_PROJECT_SECRET}`;
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

async function ipfsClient() {
  const ipfs = await create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });
  return ipfs;
}

const uploadFile = async (_path) => {
  let ipfs = await ipfsClient();
  let photo = fs.readFileSync(
    "C:\\Users\\SHUBHAM\\Documents\\NFT-war\\temp\\uploadable\\01_NFT.png"
  );
  let result = await ipfs.add(photo);
  console.log(result);
  return result;
};

const uploadJson = async (_json) => {
  let ipfs = await ipfsClient();
  let result = await ipfs.add({
    path: "metadata.json",
    content: JSON.stringify(_json),
  });
  console.log(result);
  return result;
};

module.exports = {
  uploadFile,
  uploadJson,
};
