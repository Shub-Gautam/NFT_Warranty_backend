const router = require("express").Router();

const Routes = require("./route/");

router.use("/generate", Routes.generate_nft_art);
// router.use('/auth', Routes.onboarding);
// router.use('/profile', Routes.profile);

module.exports = router;
