const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());

server.use("/api", router);

module.exports = server;
