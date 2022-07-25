const router = require("express").Router();
const { generate_nft_art } = require("../controller");

router.get("/addnftdata", generate_nft_art.addnftdata);

module.exports = router;
