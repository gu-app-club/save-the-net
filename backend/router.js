const express = require("express");
const backend = require("./index");
const router = express.Router();

router.post("/send", backend.send);

module.exports = router;
