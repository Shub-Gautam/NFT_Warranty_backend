const router = require("express").Router();

const v1Routes = require("./v1/routes");

router.use("/v1/flip", v1Routes);

module.exports = router;
