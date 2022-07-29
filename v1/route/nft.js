const router = require("express").Router();
const { nft } = require("../controller");

router.post("/generate/nftdata", nft.addnftdata);
router.post("/mint/nft", nft.mint);

module.exports = router;
