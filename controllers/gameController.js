const Game = require("../models/gameModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllGames = catchAsync(async (req, res, next) => {
  const game = await Game.find();

  res.status(200).json({
    status: "success",
    results: game.length,
    data: {
      game
    }
  });
});

exports.createGame = catchAsync(async (req, res, next) => {
  const newGame = await Game.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      newGame
    }
  });
});

exports.updateGame = catchAsync(async (req, res, next) => {
  const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: "success",
    data: {
      game
    }
  });
});

exports.getGame = catchAsync(async (req, res, next) => {
  const game = await Game.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      game
    }
  });
});

exports.deleteGame = catchAsync(async (req, res, next) => {
  const game = await Game.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null
  });
});
