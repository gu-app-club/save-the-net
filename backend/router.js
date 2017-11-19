const express = require("express");
const backend = require("./index");
const router = express.Router();

router.post("/send", backend.send);
router.get("/getrep/:zipcode", backend.getrep);

module.exports = router;
