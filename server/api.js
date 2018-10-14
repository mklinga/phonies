const express = require("express");
const PHONEDATA = require("./phones.json");

const apiRouter = express.Router();

const getPhones = (request, response, next) => response.json(PHONEDATA);

apiRouter.get("/phones", getPhones);

module.exports = apiRouter;
