const router = require("express").Router();
const { upload_ipfs } = require("../controller");

router.get("/upload/ipfs", upload_ipfs.upload);

module.exports = router;
