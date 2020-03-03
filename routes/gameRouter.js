const express = require("express");
const gameController = require("../controllers/gameController");

const router = express.Router();

router.route("/").get(gameController.getAllGames);

module.exports = router;
