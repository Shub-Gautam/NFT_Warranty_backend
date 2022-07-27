// Help Truffle find `TruffleTutorial.sol` in the `/contracts` directory
const FriedRice = artifacts.require("FriedRice");

module.exports = function (deployer) {
  // Command Truffle to deploy the Smart Contract
  deployer.deploy(FriedRice);
};
