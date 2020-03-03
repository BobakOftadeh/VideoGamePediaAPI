const Game = require("../models/gameModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllGames = catchAsync(async (res, req, next) => {
  const games = Game.find();

  res.status(200).json({
    status: "success",
    results: games.length,
    data: {
      games
    }
  });
});
