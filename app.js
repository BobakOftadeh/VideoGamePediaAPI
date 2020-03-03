const express = require("express");
const morgan = require("morgan");

const gameRouter = require("./routes/gameRouter");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/games", gameRouter);

module.exports = app;
