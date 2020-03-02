const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", err => {
  console.log("Uncaught Exception! Server Shutting down");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./app");

const port = process.env.port || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
