const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("DB connected");
  });

process.on("uncaughtException", err => {
  console.log("Uncaught Exception! Server Shutting down");
  console.log(err.name, err.message);
  process.exit(1);
});

const port = process.env.port || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
