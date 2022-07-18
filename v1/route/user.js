const router = require("express").Router();
const { user } = require("../controller");

router.get("/adduser", user.adduser);

module.exports = router;
