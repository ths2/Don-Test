const mongoose = require('mongoose');

const gameResultSchema = new mongoose.Schema({
  player: { type: String, required: true },
  level: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  timeTaken: { type: Number, required: true },
  moves: { type: Number, required: true },
  gameDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GameResult', gameResultSchema);