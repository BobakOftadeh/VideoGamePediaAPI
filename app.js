const express = require("express");
const morgan = require("morgan");

const gameRouter = require("./routes/gameRouter");

const app = express();

app.use("/api/v1/games", gameRouter);

module.exports = app;
