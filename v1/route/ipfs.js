const router = require("express").Router();
const { ipfs } = require("../controller");

router.post("/upload/ipfs", ipfs.upload);

module.exports = router;
