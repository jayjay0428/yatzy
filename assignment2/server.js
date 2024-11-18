const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Game State
let gameState = {
    diceValues: [1, 1, 1, 1, 1],
    rollCount: 0,
    scores: {}
};

// Endpoint to roll dice
app.get('/roll-dices', (req, res) => {
    if (gameState.rollCount < 3) {
        gameState.diceValues = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
        gameState.rollCount++;
        res.json(gameState.diceValues);
    } else {
        res.status(400).json({ message: 'No more rolls allowed this turn' });
    }
});

// Endpoint to reset the game state
app.post('/reset-game', (req, res) => {
    gameState = {
        diceValues: [1, 1, 1, 1, 1],
        rollCount: 0,
        scores: {}
    };
    res.json({ message: 'Game reset successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
