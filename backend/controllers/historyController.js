const GameResult = require('../models/gameResult');

exports.getHistory = async (req, res) => {
  try {
    const results = await GameResult.find()
      .sort({ gameDate: -1 })
      .limit(10)
      .lean(); // .lean() para melhor performance

    res.json({ 
      success: true,
      data: results
    });
    
  } catch (error) {
    console.error('Erro ao buscar histórico:', error);
    res.status(500).json({
      success: false,
      error: "Erro ao buscar histórico",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};