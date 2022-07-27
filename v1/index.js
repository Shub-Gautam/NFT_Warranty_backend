const router = require("express").Router();

const Routes = require("./route/");

router.use("/generate", Routes.generate_nft_art);
router.use("/auth", Routes.user);
router.use("/mint", Routes.mint);

module.exports = router;
