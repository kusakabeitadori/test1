const express = require("express");
const logger = reuire("morgan");
const app = express();

app.use(logger("dev"));

