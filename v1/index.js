const router = require("express").Router();

const Routes = require("./route/");

router.use("/nft", Routes.nft);
router.use("/auth", Routes.user);
router.use("/ipfs", Routes.ipfs);

module.exports = router;
