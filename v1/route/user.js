const router = require("express").Router();
const { user } = require("../controller");

router.post("/adduser", user.addUser);
router.post("/getuser", user.getUser);

module.exports = router;
