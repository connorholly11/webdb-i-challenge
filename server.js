const express = require("express");
const accountsRouter = require("./data/expressRouters/accounts");

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());
server.use("/accounts", accountsRouter);

module.exports = server;
