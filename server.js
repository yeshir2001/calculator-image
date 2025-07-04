const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;
const HISTORY_FILE = 'history.json';

app.use(cors());
app.use(express.json());

// Get calculation history
app.get('/api/history', (req, res) => {
    fs.readFile(HISTORY_FILE, 'utf8', (err, data) => {
        if (err) return res.json([]);
        res.json(JSON.parse(data));
    });
});

// Add a new calculation to history
app.post('/api/history', (req, res) => {
    const { expression, result } = req.body;
    fs.readFile(HISTORY_FILE, 'utf8', (err, data) => {
        let history = [];
        if (!err && data) history = JSON.parse(data);
        history.unshift({ expression, result, time: new Date().toISOString() });
        if (history.length > 20) history = history.slice(0, 20);
        fs.writeFile(HISTORY_FILE, JSON.stringify(history, null, 2), () => {
            res.json({ success: true });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
