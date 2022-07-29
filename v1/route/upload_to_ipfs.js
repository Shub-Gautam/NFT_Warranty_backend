const router = require("express").Router();
const { upload_ipfs } = require("../controller");

router.post("/upload/ipfs", upload_ipfs.upload);

module.exports = router;
