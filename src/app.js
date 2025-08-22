// src/app.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Main route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Maaari kang magdagdag ng iba pang routes dito...
// Halimbawa: app.use('/api/services', require('./routes/services'));

module.exports = app;
