const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  Rank: {
    type: Number,
    required: [true, "A game must have a Rank"],
    unique: true,
    trim: true
  },
  Name: {
    type: String,
    required: [true, "A game must have a Rank"],
    trim: true
  },
  ESRB_Rating: {
    type: String,
    trim: true
  },
  Platform: {
    type: String,
    required: [true, "A game must have a Platform"],
    trim: true
  },
  Genre: {
    type: String,
    required: [true, "A game must have a Genre"],
    trim: true
  },
  Publisher: {
    type: String,
    required: [true, "A game must have a Publisher"],
    trim: true
  },
  Developer: {
    type: String,
    required: [true, "A game must have a Developer"],
    trim: true
  },
  Critic_Score: {
    type: Number
  },
  User_Score: {
    type: Number
  },
  Total_Shipped: {
    type: Number
  },
  Global_Sales: {
    type: Number
  },
  NA_Sales: {
    type: Number
  },
  PAL_Sales: {
    type: Number
  },
  JP_Sales: {
    type: Number
  },
  Other_Sales: {
    type: Number
  },
  Year: {
    type: Number
  },
  slug: String
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
