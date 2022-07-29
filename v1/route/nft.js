const router = require("express").Router();
const { nft } = require("../controller");

router.post("/generate/nftdata", nft.addnftdata);
router.post("/mint", nft.mintNft);
router.post("/search", nft.getNft);
router.post("/search/art/details", nft.getArtData);

module.exports = router;
