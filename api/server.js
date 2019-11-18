const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const carsRouter = require("../routers/carsRouter.js");

const server = express();
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());
server.use("/api/cars", carsRouter);

module.exports = server;
