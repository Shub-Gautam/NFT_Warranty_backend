const router = require("express").Router();

const v1Routes = require("./v1/route");

router.use("/v1/flip", (req, res, next) => {
  res.send("work");
});

module.exports = router;
