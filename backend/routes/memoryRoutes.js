const express = require('express');
const { saveGameData } = require('../controllers/memoryController');
const router = express.Router();

const { getHistory } = require('../controllers/historyController');


// Route to save game data
router.post('/save', saveGameData);

// Get History
router.get('/history', getHistory); 

module.exports = router;
