// server.js

// Import the necessary packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Kung gagamit ka ng MongoDB
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000; // Maglalagay tayo ng port sa .env file

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Main route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});