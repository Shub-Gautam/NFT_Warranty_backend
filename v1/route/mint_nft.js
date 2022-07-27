const router = require("express").Router();
const { mint_nft } = require("../controller");

router.post("/mint/nft", mint_nft.mintNft);

module.exports = router;
